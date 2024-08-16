import React  from 'react'

function Sidebar({selectedOption,setSelectedOption}) {



    const handleOptionChange=(event)=>{
        setSelectedOption({...selectedOption,category:event.target.value})
    }
    const handlePriceChange=(event)=>{
        setSelectedOption({...selectedOption,price:event.target.value})
    }
    const handleColorChange=(event)=>{
        setSelectedOption({...selectedOption,color:event.target.value})
    }




  return (
    <>
        <div className="sideBarMain ">
            <div className="filter">
            <div className="category">
                <div className="mainHeading">
                Category
                </div>
                <input value={'all'}  defaultChecked onChange={handleOptionChange} type="radio" name='category'  id='categoryAll' />
                <label htmlFor="categoryAll">All</label><br />
                <input type="radio" value={"sneaker"} onChange={handleOptionChange} name='category'  id='categorySneakers' />
                <label htmlFor="categorySneakers">Sneakers</label><br />
                <input type="radio" name='category' value={'running'}  onChange={handleOptionChange} id='categoryRunning' />
                <label htmlFor="categoryRunning">Running</label>
            </div>
            <div className="price">
                <div className="mainHeading">
                    Price
                </div>
                <input type="radio" name='price' value={'all'} onChange={handlePriceChange} defaultChecked id='priceAll' />
                <label htmlFor="priceAll">All</label><br />
                <input type="radio" name='price' value={'1'} onChange={handlePriceChange} id='priceOne' />
                <label htmlFor="priceOne">$0-$75</label><br />
                <input type="radio" name='price' value={'2'} onChange={handlePriceChange} id='priceTwo' />
                <label htmlFor="priceTwo">$75-$125</label><br />
                <input type="radio" name='price' value={'3'} onChange={handlePriceChange} id='priceThree' />
                <label htmlFor="priceThree">Over $125</label>
            </div>
            <div className="color">
                <div className="mainHeading">
                Color
                </div>
                <input type="radio" value={'all'} onChange={handleColorChange} name='color' defaultChecked id='colorAll' />
                <label htmlFor="colorAll">All</label><br />
                <input type="radio" value={'red'} onChange={handleColorChange} name='color'  id='colorRed' />
                <label htmlFor="colorRed">Red</label><br />
                <input type="radio" value={'blue'} onChange={handleColorChange} name='color'  id='colorBlue' />
                <label htmlFor="colorBlue">Blue</label><br />
                <input type="radio" value={'grey'} onChange={handleColorChange} name='color'  id='colorGrey' />
                <label htmlFor="colorGrey">Grey</label><br />
                <input type="radio" value={'green'} onChange={handleColorChange} name='color'  id='colorGreen' />
                <label htmlFor="colorGreen">Green</label><br />
                <input type="radio" value={'black'} onChange={handleColorChange} name='color' id='colorBlack' />
                <label htmlFor="colorBlack">Black</label>
            </div>                       
            </div>
        </div>
    </>
  )
}

export default Sidebar