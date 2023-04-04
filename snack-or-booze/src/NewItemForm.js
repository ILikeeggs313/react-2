import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardText,
    Form, FormGroup, Label, Input, Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from "axios";

function NewItemForm({addItem}){
    const INITIAL_STATE = {
        // category:"snacks",
        name:"",
        description:"",
        recipe:"",
        serve:""
      };
      const [formData, setFormData] = useState(INITIAL_STATE);
      const [itemType, setItemType] = useState("drinks");

         /** Send {name, quantity} to parent
   *    & clear form. */
    const handleTypeChange = (e) => {
            const {value} = e.target;
            setItemType(value);
        };

    const handleChange = (e) => {
        const { name, value }= e.target;
        setFormData(fData => ({
          ...fData,
          [name]: value
        }));
    //Let's modify the submit route
    };
    const handleSubmit = evt => {
        evt.preventDefault();
        addItem(formData);
        setFormData(INITIAL_STATE);
        // console.log(formData);
      };
    //then we render a form to add a new food item,
    //with labels for category, name, description and recipe
    return (
        <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            Add Menu Item
          </CardTitle>
          <CardText className="font-italic">Add a drink or snack:</CardText>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="type">Type of Item</Label>
            <Input 
              type="select" 
              name="type" 
              id="type" 
              onChange={handleTypeChange}
              value={itemType}>
              <option value="drinks" defaultValue>Drink</option>
              <option value="snacks">Snack</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input 
              type="text" 
              name="name" 
              id="name" 
              onChange={handleChange} 
              value={formData.name}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">Description</Label>
            <Input 
              type="text" 
              name="description" 
              id="Description" 
              onChange={handleChange} 
              value={formData.description}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="Recipe">Recipe</Label>
            <Input 
              type="text" 
              name="recipe" 
              id="Recipe" 
              onChange={handleChange} 
              value={formData.recipe}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="serve">Serve</Label>
            <Input 
              type="text" 
              name="serve" 
              id="serve" 
              onChange={handleChange} 
              value={formData.serve}
            />
          </FormGroup>
          <Button>Add</Button>
        </Form>
        </CardBody>
      </Card>
    </section>
  );
}

export default NewItemForm;