import React, { useEffect, useState } from 'react'
import laptopList from './dummydata'

const Browse = () => {

    const [laptopData, setlaptopData] = useState(laptopList);

    const brands = ['Asus', 'Acer', 'HP', 'Dell', 'Lenovo', 'Mac'];

    const [selOptions, setSelOptions] = useState([]);

    const displayData = () => {
        return laptopData.map((laptop) => (  
            <div className="col-md-3">
                <div className="card">
                    <img src={laptop.image} alt="laptop_image" />
                    <div className='card-body'>
                        <h4>{laptop.brand}</h4> 
                        <h3>{laptop.model}</h3> 
                        <h2>&#8377; {laptop.price}</h2> 
                    </div>
                </div>
            </div>
        ));
    };

    const searchLaptop = (e) => {
        const search = e.target.value;
        const result = laptopList.filter( ( laptop ) => { 
            return laptop.model.toLowerCase().includes(search.toLowerCase());
         });
        setlaptopData(result);
    };

    const filterBrand = (e) => {
        if(e.target.value === "") return setlaptopData(laptopList);
        const selectedBrand = e.target.value;
        const result = laptopList.filter((laptop) => { return laptop.brand === selectedBrand });
        setlaptopData(result);
    }

    const selectOption = (brand) => {
        if(selOptions.includes(brand)) {
            setSelOptions(selOptions.filter((b) => b !== brand));
        }else{
            setSelOptions([...selOptions, brand]);
        }
      }

    useEffect(() => {
        if(setSelOptions.length === 0) return setlaptopData(laptopList);
        setlaptopData(laptopList.filter((laptop) => {
            return selOptions.includes(laptop.brand);
        }))
    }, [selOptions]);

  return (
    <div>
        <header className='bg-dark text-white'>
            <div className="container py-5">
                <h1 className='text-center'>Brose Projuct</h1>
                <hr />
                <input type="text" className='form-control' onChange={searchLaptop}/>

                <div className="row mt-4">
                    <div className="col mt-4">
                        <select className='form-control'onChange={filterBrand}>
                            <option value="">Select Brand</option>
                            {brands.map((b) => (
                                <option value={b}>{b}</option>
                            ))}
                        </select>
                    </div>

                    <div className="col-md-4 my-auto">
                <input checked={selOptions.includes('Asus')} onClick={() => {selectOption('Asus')}} className="form-check-input" type="checkbox" /> Asus&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('HP')} onClick={() => {selectOption('HP')}} className="form-check-input" type="checkbox" /> HP&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('Acer')} onClick={() => {selectOption('Acer')}} className="form-check-input" type="checkbox" /> Acer&nbsp;&nbsp;&nbsp;
                <input checked={selOptions.includes('Lenovo')} onClick={() => {selectOption('Lenovo')}} className="form-check-input" type="checkbox" /> Lenovo&nbsp;&nbsp;&nbsp;
            </div>
         </div>
        </div>
    </header>

        <div className='container'>
            <div className='row'>{displayData()}</div>
        </div>
    </div>
  );
};



export default Browse;