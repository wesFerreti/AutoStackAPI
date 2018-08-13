const node_modbus = require('node-modbus')
 var s;
const client = node_modbus.client.tcp.complete({
    'host': '192.168.1.45', /* IP or name of server host */
    'port': 502, /* well known Modbus port */
    'unitId': 1, 
    'timeout': 2000, /* 2 sec */
    'autoReconnect': true, /* reconnect on connection is lost */
    'reconnectTimeout': 15000, /* wait 15 sec if auto reconnect fails to often */
    'logLabel' : 'ModbusClientTCP', /* label to identify in log files */
    'logLevel': 'debug', /* for less log use: info, warn or error */
    'logEnabled': true
})
 
const time_interval = 5000
client.connect()
client.on('connect', function () {
  setInterval( function () {
     client.readHoldingRegisters(1,10).then((response) => console.log(response.register))
  }, time_interval) /* reading coils every second */
})
