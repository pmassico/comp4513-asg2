import React from 'react';
import PropTypes from 'prop-types';

//The following link was used to create the modal for this about page: https://codepen.io/Laumak/pen/pRJzGL
const Modal = ({ children, closeModal, modalState, title }) => {
    if(!modalState) {
        return null;
    }

    return(
        <div className="modal is-active">
            <div className="modal-background" onClick={closeModal} />
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">{title}</p>
                    <button className="delete" onClick={closeModal} />
                </header>
                <section className="modal-card-body">
                    <div className="content">
                        {children}
                    </div>
                </section>
                <footer className="modal-card-foot">
                    <a className="button" onClick={closeModal}>Cancel</a>
                </footer>
            </div>
        </div>
    );
}

Modal.propTypes = {
    closeModal: PropTypes.func.isRequired,
    modalState: PropTypes.bool.isRequired,
    title: PropTypes.string
}

//This component is a popup to show user profile
class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalState: false, userData: []
        };

        this.toggleModal = this.toggleModal.bind(this);
    }

    showUserDetails = () => {
        const url = //`https://www.randyconnolly.com/funwebdev/3rd/api/movie/movies.php?id=${movie.id}`;
        `http://localhost:5000/api/login/user`;

        const request = async () => {
            console.log(url);
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            this.setState( {userData: json} );
        };

        request();
    };
    

    toggleModal() {    
        this.setState((prev, props) => {
            const newState = !prev.modalState;

            return { modalState: newState };
        });
    }

    componentDidMount() {
        this.showUserDetails();
    }

    render() {
        return(
            <div>
                <button className="button is-pulled-right" onClick={this.toggleModal}>Profile</button>

                <Modal 
                    closeModal={this.toggleModal} 
                    modalState={this.state.modalState} 
                    title="Profile"
                    >
                    <div>
                        <img src={this.state.userData.picture && this.state.userData.picture.large} alt={this.state.userData.details && this.state.userData.details.firstname}></img>
                        <div>{this.state.userData.details && this.state.userData.details.firstname}</div>
                        <div>{this.state.userData.details && this.state.userData.details.lastname}</div>
                        <div>{this.state.userData.details && this.state.userData.details.city}</div>
                        <div>{this.state.userData.details && this.state.userData.details.country}</div>
                        <div>{this.state.userData.membership && this.state.userData.membership.date_joined}</div>
                    </div>
                </Modal>
            </div>
        );
    }
}

export default Profile;