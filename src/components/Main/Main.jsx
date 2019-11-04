import React, {Component} from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import './main.scss';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {
            cards_data: [],
            filtered_data: [], //reik dvieju, del search
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleHide = this.handleHide.bind(this);

    }
    componentDidMount() {
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    cards_data: response.categories,
                    filtered_data: response.categories
                })
            });
    }

    handleHide(id){
        console.log(id);
        let update = this.state.filtered_data;
        for(let i of update){
            if(i.idCategory === id){
                update = update.filter(item => item !== i)
            }
        }
        this.setState({
            filtered_data: update
        })
    }

    handleSearch(event){
        console.log(event.target.value);
        let update = [];
        if(event.target.value === ""){
            update = this.state.cards_data
        }
        else{
            update = this.state.cards_data.filter(item => {
               return item.strCategory.toLowerCase().includes(event.target.value.toLowerCase())
            })
        }

        this.setState({
            filtered_data: update
        })
    }

    render() {

        if(!this.state.cards_data){
            return <div>Loading...</div>
        }

        else {
            let size = 6;
            return (
                <main>
                    <Container>
                        <Row >
                    <h2 className="text-center">Mainas</h2>
                        </Row>
                        <Row>
                            <form className="bd-dark">
                                <label className="mx-3">Paieska</label>
                                <input name="search" type="text" placeholder="kategorija" onChange={this.handleSearch}/>
                            </form>
                        </Row>
                        <Row>
                            {this.state.filtered_data.slice(0, size).map((item) =>
                                <Col className="px-0 px-sm-2" key={item.idCategory}>
                                    <Card className="mx-auto my-1" style={{ width: '18rem'}} >
                                        <Card.Img variant="top" src={item.strCategoryThumb} />
                                        <Card.Body>
                                            <Card.Title>{item.strCategory}</Card.Title>
                                            <Card.Text className="scroll">
                                            {item.strCategoryDescription}
                                            </Card.Text>
                                            <Button onClick = {() => this.handleHide(item.idCategory)} variant="secondary">Hide category</Button>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Container>
                </main>
            );
        }
    }
}


export default Main
