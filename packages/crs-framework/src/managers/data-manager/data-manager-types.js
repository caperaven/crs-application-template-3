import{DataManagerMemoryProvider as e}from"./data-manager-memory-provider.js";import{DataManagerIDBProvider as r}from"./data-manager-idb-provider.js";import{DataManagerPerspectiveProvider as t}from"./data-manager-perspective-provider.js";const d=Object.freeze({memory:e,idb:r,perspective:t}),c=Object.freeze({add:"add",update:"update",delete:"delete",refresh:"refresh",selected:"selected",perspectiveChanged:"perspective_changed",perspectiveRollback:"perspective_rollback"});export{c as CHANGE_TYPES,d as MANAGER_TYPES};