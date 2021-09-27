import React, {Component} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import {Jarak, ListBook, ListCategory, HeaderComponent} from '../../components';
import {dummyColors} from '../../data';
import {Colors, fonts, responsiveHeight, responsiveWidth} from '../../utils';
import {getListBooks} from '../../actions/BookAction';
import {getCategory} from '../../actions/CategoryAction';
import {connect} from 'react-redux';

class ListBooks extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', () => {
      this.props.dispatch(getCategory());
      if (this.props.keyBook) {
        this.props.dispatch(
          getListBooks(this.props.keyBook, this.props.keyword),
        );
      } else if (this.props.keyword) {
        this.props.dispatch(
          getListBooks(this.props.keyBook, this.props.keyword),
        );
      } else {
        this.props.dispatch(getListBooks());
      }
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  componentDidUpdate(prevProps) {
    const {keyBook, keyword} = this.props;
    if (keyBook && prevProps.keyBook !== keyBook) {
      this.props.dispatch(getListBooks(keyBook, keyword));
    }
    if (keyword && prevProps.keyword !== keyword) {
      this.props.dispatch(getListBooks(keyBook,keyword));
    }
  }

  render() {
    const {
      navigation,
      category,
      categoryLoading,
      booksLoading,
      keyBook,
      keyword,
    } = this.props;
    return (
      <View style={styles.page}>
        <HeaderComponent page="ListBooks" navigation={this.props.navigation} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.wrapperList}>
            {categoryLoading ? (
              <ActivityIndicator size="large" color={Colors.primary} />
            ) : (
              <ListCategory list={category} navigation={navigation} />
            )}
          </View>
          <View style={styles.wrapperList}>
            <Text style={styles.textList}>Choose Your Books</Text>
            {booksLoading ? (
              <ActivityIndicator size="large" color={Colors.primary} />
            ) : (
              <ListBook warna={dummyColors} navigation={navigation} />
            )}
          </View>
          <Jarak height={70} />
        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  category: state.CategoryReducer.categoryResult,
  categoryLoading: state.CategoryReducer.categoryLoading,
  booksLoading: state.BooksReducer.booksLoading,
  keyBook: state.BooksReducer.idBook,
  nameBook: state.BooksReducer.nameBook,
  keyword: state.BooksReducer.saveKeyword,
});

export default connect(mapStateToProps, null)(ListBooks);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  wrapperList: {
    marginHorizontal: responsiveWidth(30),
    marginTop: responsiveHeight(10),
  },
  textList: {
    fontSize: 14,
    fontFamily: fonts.primary.semibold,
  },
});
