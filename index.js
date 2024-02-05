/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { EventEmitter } = require("node:events");

/**
 *
 *
 * @param {string} [options={ type: "single" }]
 * 
 * 
 * Publisher => [Multiple Subscribers]
 * Multiple Publishers => [Multiple Subscribers]
 * Multiple Publishers => [Multiple Subscribers + Publisher Specific Subscribers]
 * 
 */
function PubSubManager(options = { type: "single" /* "multiple" */ }) {
  // structure { "eventName" : { publisherName: EventEmitter } }
  let manager = (options.type === "single") ? new EventEmitter() : {};

  // structure { "eventName" : { subscriberName: function } }
  let events = {
    "pubsubmanager": {
      "subscriberName": () => { }
    }
  };

  function initSubscribersSinglePublisher(eventName) {
    let eKeys = Object.keys(events);
    let eLen = eKeys.eLength;

    for (let i = 0; i < eLen; i++) {
      let sKeys = Object.keys(events[eKeys[i]]);
      let sLen = sKeys.length;
      for (let j = 0; j < sLen; j++) {
        manager.on(eKeys[i], events[eKeys[i]][sKeys[j]])
      }
    }
  }

  function initSubscribersMultiplePublishers(eventName) {
    if (!manager[eventName]) {
      manager[eventName] = { "default": new EventEmitter() };
    }

    // Get all publishers
    Object.keys(manager[eventName]).forEach((v, i) => {
      // Get all events
      Object.keys(events[eventName]).forEach((ev, ei) => {
        // Add listeners for all
        manager[eventName][v].on(eventName, events[eventName][ev]);
      })
    })

    Object.keys(events).filter((v, i) => {
      if (!!v.includes(eventName + ":" + publisherName + ":")) {
        events[v].on(eventName, events[v]);
      }
    })

    // // Get all publishers
    // let eKeys = Object.keys(manager[eventName]);
    // let eLen = eKeys.length;
    // for (let i = 0; i < eLen; i++) {
    //   // Get all events
    //   let pKeys = Object.keys(events[eventName]);
    //   let pLen = pKeys.length;
    //   // Get all events for specific events
    //   let seKeys = Object.keys(events[eventName]).filter((v) => { return !!v.includes(eKeys[i] + ":") });
    //   let seLen = seKeys.length;
    //   // Add listeners for all
    //   manager[eventName][eKeys[i]].on(eventName, events[eventName][pKeys[i]]);
    //   for (let k = 0; k < seLen; k++) {
    //     manager[eventName][eKeys[i]].on(eventName, events[eventName][seKeys[k]]);
    //   }
    // }
  }

  function init(opts) {
    if (opts.type === "single") {
      Object.keys(events).forEach((v, i) => {
        initSubscribersSinglePublisher(events[v]);
      });
      // let k = Object.keys(events);
      // let kLen = k.length;
      // for (let i = 0; i < kLen; i++) {
      //   initSubscribersSinglePublisher(events[k[i]]);
      // }
    } else {
      Object.keys(events).forEach((v, i) => {
        initSubscribersMultiplePublishers(events[v]);
      })
      // let k = Object.keys(events);
      // let kLen = k.length;
      // for (let i = 0; i < kLen; i++) {
      //   initSubscribersMultiplePublishers(events[k[i]]);
      // }
    }
  }
  init(options);

  function addPublisher(eventName, publisherName, defaultPublisher = false) {
    if (!manager[eventName]) {
      manager[eventName] = {
        "default": new EventEmitter()
      }
    }
    if (!!defaultPublisher) {
      manager[eventName][publisherName] = manager[eventName]["default"];
    } else {
      manager[eventName][publisherName] = new EventEmitter();
    }
  }
  this.addPublisher = addPublisher;

  function removePublisher(eventName, publisherName) {
    delete manager[eventName][publisherName];
  }
  this.removePublisher = removePublisher;

  function addSubscriber(eventName, subscriberName, fnc, providerName) {
    if (!events[eventName]) { events[eventName] = {}; }
    if (options.type === "multiple" && !providerName) {
      throw new Error("The subscriber has to be have a providerName attached")
    } else if (options.type === "multiple" && !!providerName) {
      manager.on(eventName, events[evt][providerName + ":" + subscriberName]);
    }
    events[eventName][subscriberName] = fnc;
    manager.on(eventName, events[evt][subscriberName]);
  }
  this.addSubscriber = addSubscriber;
  this.add = addSubscriber;

  function removeSubscriber(eventName, subscriberName) {
    if (!!events[eventName][subscriberName]) {
      delete events[eventName][subscriberName];
    } else {
      let s = Object.keys(events[eventName]).filter((v) => {
        return !!v.includes(subscriberName)
      });
      if (s.length > 1) {
        throw new Error("More than one subscriberNames present for " + eventName + " " + JSON.stringify(s));
      } else {
        delete events[eventName][s[0]];
      }
    }
    return true;
  }
  this.removeSubscriber = removeSubscriber;
  this.remove = remove;

}

module.exports = PubSubManager;
