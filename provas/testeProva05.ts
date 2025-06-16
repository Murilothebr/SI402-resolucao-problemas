import Network from "./prova05";

var network = new Network();

network.add("a", "b");
network.add("a", "c");
network.add("c", "d");
network.add("e", "f");
network.add("g", "e");
network.add("h", "i");

var connected = network.getConnected("e");

console.log(connected);

console.log("------------------");

var notConnected = network.getNotConnected("e");

console.log(notConnected);
