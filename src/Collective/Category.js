import React, {useState}from 'react'
// import categories from './Collective/Categories'
import categories from './Categories';

// import menpics from '../Images/blue suit.webp'


const Category = () => {
const [data, setData]=useState(categories);
const filterResult=(catItem) =>{
  const result = categories.filter((curData)=>{
    return curData.category===catItem;
  });
  setData(result);

}


  return (
    <div>
     
    <h1 className='text-center text-info'>Add items to cart</h1>
    <div className='container-fluid mx-2'> 
    <div className='row mt-5 mx-2'>
      <div className='col-md-3'>
        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult("Men")}>MEN</button>
        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult("women")}>WOMEN</button>
        <button className='btn btn-warning w-100 mb-4' onClick={() => filterResult("children")}>KIDS</button>
        <button className='btn btn-warning w-100' onClick={() => setData(categories)}>ALL</button>
        <div className='col-md-9'>
          <div className='row'>
            {data.map((values) =>{
              const {tittle,Price,img} =values
              return(
                <>

<div className='col-md-4'>

<div className="card">
<img src={img} class="card-img-top" alt=""/>
<div className="card-body">
<h5 className="card-title">{tittle}</h5>
<p>Price: {Price}</p>
<input type='number' placeholder='select quantity' className='btn-btn-sm'/>
<p className="card-text">Our carefully selected turkish wears have been known for over 3 decades to 
exhude quality and class. while rocking it, be rest assured you are dabbing in style.</p>
<a href="#" class="btn btn-primary">Add item to cart</a>
</div>
</div>

</div>




                </>
              )
            })}
            
          </div>

        </div>

    </div>

    </div>

    </div>

    
      
    </div>
  )
}

export default Category;