import './SearchBox.css';

import { Component } from 'react';

class SearchBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: "",
            onSearch: props.onSearch || (()=>{})
        }
    }

    onChange(evt) {
        var input_text = evt.target.value;

        if(input_text.startsWith("r/")) {
            input_text = input_text.substring(2);
        }

        this.setState({text: input_text});
    }

    onKeyUp(evt) {
        if(evt.key === "Enter") {
            this.onChange(evt);
            this.onSubmit();
        }
    }

    onSubmit() {
        if(this.state.text.length > 0) {
            this.state.onSearch(this.state.text);
        }
    }

    render() {
        return (
            <div>
                <input
                    onChange={evt=>this.onChange(evt)}
                    onKeyUp={evt=>this.onKeyUp(evt)}
                    className="SearchBox-Input"
                    placeholder="Subreddit Name"/>

                <button
                    onClick={() => this.onSubmit()}
                    disabled={this.state.text.length === 0}
                    className="SearchBox-Button">
                    Go
                </button>
            </div>
        );
    }
}

export default SearchBox;
