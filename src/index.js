import Section from './components/basic/Section'
import Position from './components/basic/Position'
import List from './components/basic/List'
import Svga from './components/basic/Svga'
import Sprite from './components/basic/Sprite'
import Button from './components/basic/Button'
import Popup from './components/basic/Popup'

import Bullet from './components/interact/Bullet'
import Timer from './components/interact/Timer'
import Roulette from './components/interact/Roulette'
import Tab from './components/interact/Tab'

export {
  Section,
  Position,
  List,
  Svga,
  Sprite,
  Button,
  Popup,
  Bullet,
  Timer,
  Roulette,
  Tab
}

let installed = false

export default {
  install(Vue) {
    if (installed) {
      return
    }

    const components = {
      Section,
      Position,
      List,
      Svga,
      Sprite,
      Button,
      Popup,
      Bullet,
      Timer,
      Roulette,
      Tab
    }

    Object.keys(components).forEach(key => {
      Vue.component('A' + key, components[key])
    })

    installed = true
  }
}
