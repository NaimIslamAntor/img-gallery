import { useState } from 'react'
import axios from 'axios'
import Card from './Card'
import { datas } from '../datas/datas'
import Modal from './Modal'

function CardContainer() {
  const [ imgs, setImgs ] = useState(datas)
  const [ i, setI ] = useState(0)

  const left = () => {
    if(i === 0){
      setI(imgs.length-1)
      return
    }

    setI(i-1)
  }

  const right = () => {
    if(i === imgs.length-1){
      setI(0)
      return
    }

    setI(i+1)

  }

  return (
  	<div className="container margin-100px-top">
      <Modal left={left} right={right} imgs={imgs} i={i} />
        <div className="row">
    {
      imgs.map((data, index) => <Card key={data.id} src={data.src} index={index} setI={setI}  />)
    }
  	</div>
  	</div>
  );
}

export default CardContainer;