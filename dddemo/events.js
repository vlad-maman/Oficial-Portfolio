// const { log } = require("console")
// let EventEmitter = require("events")


// let emmiter = new EventEmitter()



// // emmiter.on( event: "anything", listener: data =>{
// //    console.log("ON: anithing", data)
// // })

// // emmiter.emit(event: "anything", args: {a: 1})

// class Dispatcher extends EventEmitter {
//     subscribe(eventName, cb){
//      console.log("[Subscribe...]")
//      this.on(eventName, cb)
//     }

//     dispatch(eventName, data){
//     console.log("[Dispachong...]");
//     this.emit(eventName, deta)
    
//     }
// }


// let dis = new Dispatcher()

// dis.subscribe(eventName:"aa", cb: data =>{
//     console.log("ON: aa", data)
// })

// dis.dispatch(eventName:"aa", data{aa: "22"})





// const EventEmitter = require('events')

// // const emitter = new EventEmitter()
// //
// // emitter.on('anything', data => {
// //   console.log('ON: anything', data)
// // })
// //
// // emitter.emit('anything', {a: 1})
// // emitter.emit('anything', {b: 2})
// //
// // setTimeout(() => {
// //   emitter.emit('anything', {c: 3})
// // }, 1500)

// class Dispatcher extends EventEmitter {
//   subscribe(eventName, cb) {
//     console.log('[Subscribe...]')
//     this.on(eventName, cb)
//   }

//   dispatch(eventName, data) {
//     console.log('[Dispatching...]')
//     this.emit(eventName, data)
//   }
// }

// const dis = new Dispatcher()

// dis.subscribe('aa', data => {
//   console.log('ON: aa', data)
// })

// dis.dispatch('aa', {aa: 22})