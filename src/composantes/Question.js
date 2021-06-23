import React, {Component} from 'react';

class Question extends Component {

    constructor(props) {
        super(props);
        this.state = {
            style: {
                modal: {
                    display: "block",
                }
            }
        };

    }

    changeModalDisplay(value) {
        const state = {...this.state};
        state.style.modal.display = value;
        this.setState(state);
    }

    showModal = () => {
        switch (this.state.style.modal.display) {

            case "none":
                this.changeModalDisplay("block");
                break;

            case "block":
                this.changeModalDisplay("none");
                break;

        }

    }

    renderResponce(responce) {
        return (
            <button>
                {responce}
            </button>
        );
    }

    renderResponces() {
        const {responces} = this.props;
        if (responces) {
            return responces.map((responce) => {
                return this.renderResponce(responce);
            });
        }
    }

    renderModal() {

        const {question} = this.props;

        return (
            <div>
                <div id="qContainer" style={{display: `${this.state.style.modal.display}`}}>
                    <div id="id01" className="question">
                        <h2>Question n.1</h2>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ed/Elon_Musk_Royal_Society.jpg"
                             width="230" height="300"></img>
                        <p>{question}</p>
                        <div>
                            {this.renderResponces()}

                            {/*<button type="button" className="choice">YES</button>*/}
                            {/*<button type="button" className="choice">NO</button>*/}
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    render() {
        return (
            <div>
                <button id={"buttonId"} onClick={this.showModal}>Afficher la question</button>
                {this.renderModal()}
            </div>
        );
    }
}

export default Question;
