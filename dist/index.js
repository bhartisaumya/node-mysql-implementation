"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cluster_1 = __importDefault(require("cluster"));
const os_1 = __importDefault(require("os"));
// import './databases'
if (cluster_1.default.isPrimary) {
    const threadCount = os_1.default.cpus().length;
    console.log(threadCount);
    // assigning workers
    for (let thread = 0; thread < threadCount; thread++) {
        cluster_1.default.fork();
    }
    cluster_1.default.on('exit', (worker, code, single) => {
        console.log(`Worker with ${worker.process.pid} died`);
        cluster_1.default.fork();
    });
}
else {
    const pid = process.pid;
    console.log(`Worker with ${pid}`);
    // let c = 0;
    // while(1){
    //     c++
    // }
    const app = (0, express_1.default)();
    app.listen(8080);
}
