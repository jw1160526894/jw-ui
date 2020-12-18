import JwButton from './JwButton'

const components = [JwButton]

const install = function(Vue){
  console.log(123);
  components.forEach(item=>{
    Vue.component(item.name,item)
  })
}

export default {
  install
}