import React, {useState}from 'react'
import categories from './Collective/Categories'

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
        <button className='btn btn-warning w-100' onClick={() => setData("categories")}>ALL</button>
        <div className='col-md-9'>
          <div className='row'>
            {data.map((values) =>{
              const {tittle,Price,image} =(values)
              return(
                <>

<div className='col-md-4'>

<div className="card">
<img src={values.image} class="card-img-top" alt=""/>
<div className="card-body">
<h5 className="card-title">{tittle}</h5>
<p>Price: {Price}</p>
<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
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