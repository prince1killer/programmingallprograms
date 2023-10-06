import React from 'react'
import './Shop.css'
import Label_innerContent from '../Label_innerContent'

function Shop() {
  return (
    <div className='shop'>
        <div className="shop_header">Shop</div>
        <div className="shop_content">
        <Label_innerContent imgName={"Photofood1.png"} button={"Vegetable"} title={"Calabrese Broccoli"} price={"$13.00"} />
        <Label_innerContent imgName={"Photofood2.png"} button={"Fresh"} title={"Fresh Banana Fruites"} price={"$14.00"} />
        <Label_innerContent imgName={"Photofood3.png"} button={"Millets"} title={"White Nuts"} price={"$15.00"} />
        <Label_innerContent imgName={"Photofood5.png"} button={"Vegetable"} title={"Mung Bean"} price={"$17.00"} />
        <Label_innerContent imgName={"Photofood6.png"} button={"Vegetable"} title={"Brown Hazelnut"} price={"$13.00"} />
        <Label_innerContent imgName={"Photofood7.png"} button={"Vegetable"} title={"Egg"} price={"$13.00"} />
        <Label_innerContent imgName={"Photofood8.png"} button={"Vegetable"} title={"Zelco Suji Elaichi Rusk"} price={"$13.00"} />
        <Label_innerContent imgName={"Photofood9.png"} button={"Vegetable"} title={"Calabrese Broccoli"} price={"$13.00"} />
        <Label_innerContent imgName={"Photofood10.png"} button={"Vegetable"} title={"White Hazelnut"} price={"$13.00"} />
        <Label_innerContent imgName={"Photofood11.png"} button={"Vegetable"} title={"Fresh Corn"} price={"$13.00"} />
        <Label_innerContent imgName={"Photofood12.png"} button={"Vegetable"} title={"Organic Almonds"} price={"$13.00"} />
        <Label_innerContent imgName={"Imagehomeproduct8.png"} button={"Vegetable"} title={"Calabrese Broccoli"} price={"$13.00"} />
       
        </div>
    </div>
  )
}

export default Shop