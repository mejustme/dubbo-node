"use strict";
/**
 * Auto generated by Dubbo2Ts.
 *
 * Wed Nov 15 2017 11:31:28 GMT+0800 (CST)
 */
Object.defineProperty(exports, "__esModule", { value: true });
var dubbo_node_zookeeper_1 = require("dubbo-node-zookeeper");
exports.ServiceHead = {
    interfac: "com.alibaba.dubbo.demo.DemoService",
    version: "LATEST",
    timeout: 6000,
    group: "dubbo",
    methods: {
        sayHello: function (name) { return [{ $class: "java.lang.String", $: name }]; },
        sayHello2: function (req) { return [
            { $class: "com.alibaba.dubbo.demo.DemoReq", $: req }
        ]; },
        sayHello3: function (name, age) { return [
            { $class: "java.lang.String", $: name },
            { $class: "java.lang.Integer", $: age }
        ]; }
    }
};
function sayHello(name) {
    return dubbo_node_zookeeper_1.default.exec("DemoService.sayHello", name);
}
exports.sayHello = sayHello;
function sayHello2(req) {
    return dubbo_node_zookeeper_1.default.exec("DemoService.sayHello2", req);
}
exports.sayHello2 = sayHello2;
function sayHello3(name, age) {
    return dubbo_node_zookeeper_1.default.exec("DemoService.sayHello3", name, age);
}
exports.sayHello3 = sayHello3;
exports.default = {
    sayHello: sayHello,
    sayHello2: sayHello2,
    sayHello3: sayHello3
};
