"use strict";(globalThis.webpackChunkmood_tracker=globalThis.webpackChunkmood_tracker||[]).push([[815],{815:(e,t,n)=>{n.r(t),n.d(t,{AppWeb:()=>s});var i=n(653);class s extends i.Uw{constructor(){super(),this.handleVisibilityChange=()=>{const e={isActive:!0!==document.hidden};this.notifyListeners("appStateChange",e),document.hidden?this.notifyListeners("pause",null):this.notifyListeners("resume",null)},document.addEventListener("visibilitychange",this.handleVisibilityChange,!1)}exitApp(){throw this.unimplemented("Not implemented on web.")}async getInfo(){throw this.unimplemented("Not implemented on web.")}async getLaunchUrl(){return{url:""}}async getState(){return{isActive:!0!==document.hidden}}async minimizeApp(){throw this.unimplemented("Not implemented on web.")}}}}]);
//# sourceMappingURL=815.8bd975c3.chunk.js.map