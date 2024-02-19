import React from "react";
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { keyword: '' };

        this.onSearchChangeEventHandler = this.onSearchChangeEventHandler.bind(this);
    }

    onSearchChangeEventHandler(event) {
        this.setState({ keyword: event.target.value }, () => {
            return this.props.searchNote(this.state);
        });
    }

    render() {
        return (
            <div className="note-head__search">
                <input type="text" placeholder="Cari judul catatan ..." value={this.state.keyword} onChange={this.onSearchChangeEventHandler} />
            </div>
        );
    }
}

export default SearchBar;

