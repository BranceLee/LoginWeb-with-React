import React, { Component } from 'react';
import { Dropdown, Form } from 'semantic-ui-react';
import axios from 'axios';

class SearchForm extends Component {
	state = {
		query: '',
		loading: false,
		books: {},
		options: []
	};

	//选中下拉搜索菜单触发
	onChange = (e, data) => {
		// this.setState({ options: data.value });
		this.props.selectBook(this.state.books[data.value]);
	};

	searchChange = (e, data) => {
		clearTimeout(this.timer);
		this.setState({ query: data.searchQuery });
		this.timer = setTimeout(this.fetchOption, 1000);
	};

	fetchOption = () => {
		if (!this.state.query) return;
		this.setState({ loading: true });
		axios
			.get(`/api/books/search?q=${this.state.query}`)
			.then((res) => res.data.books)
			.then((books) => {
				const optionList = [];
				books.map((book) => {
					books[book.goodreadsId] = book;
					optionList.push({
						key: book.goodreadsId,
						value: book.goodreadsId,
						text: book.title
					});
				});
				this.setState({ books, options: optionList, books });
			})
			.catch(() => this.setState({ options: '', loading: false }));
	};

	render() {
		return (
			<Form>
				<Dropdown
					search
					fluid
					placeholder="Search "
					value={this.state.query}
					loading={this.state.loading}
					options={this.state.options}
					onSearchChange={this.searchChange}
					onChange={this.onChange}
				/>
			</Form>
		);
	}
}

export default SearchForm;
