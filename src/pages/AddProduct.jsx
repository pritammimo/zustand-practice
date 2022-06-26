import React,{useState} from 'react'
import { Input,Button,Row, Col,Card, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {useStore} from "../store/data";
const AddProduct = () => {
  const addProduct = useStore((state) => state.addProduct);
  // console.log("product",products);
  const [productdata, setdata] = useState({
    title: "",
    category: "",
    price: "",
    description: "",
  });
  const handleChange=(e)=>{
    setdata({...productdata,[e.target.name]:e.target.value})
   }
   console.log("product",productdata);
   const handleSubmit=async()=>{
    await addProduct(productdata)
   }
  return (
    <>
    <Card title="Create a new Product">
    <Row gutter={[0, 20]}>
    <Col span={24}>
    <Input size="large" 
   value={productdata?.title}
   name="title"
  placeholder="title" 
  prefix={<UserOutlined />} 
  onChange={handleChange} />
   </Col>
     <br />
     <br />
     <Col span={24}>
     <Input size="large"
  value={productdata?.category}
  name="category"
   placeholder="category" prefix={<UserOutlined />} 
   onChange={handleChange}
   // disabled={isLoading}
   />
   </Col>
     <br />
     <br />
     <Col span={24}>
     <Input size="large" 
  value={productdata?.price}
  name="price"
  placeholder="price" prefix={<UserOutlined />} onChange={handleChange}
 //  disabled={isLoading}
  />
   </Col>
   <br/>
     <br/>
     <Col span={24}>
  <Input size="large" 
  value={productdata?.description}
  name="description"
  placeholder="description" prefix={<UserOutlined />} onChange={handleChange}
 //  disabled={isLoading}
  />
   </Col>
   <br></br>
     <Button type="primary" size="large" onClick={handleSubmit} 
     //  disabled={isLoading}
      >
           Submit
         </Button>
         </Row>
         </Card>
    </>
  )
}

export default AddProduct