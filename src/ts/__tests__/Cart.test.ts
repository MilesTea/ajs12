import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

const itemMovie1 = new Movie(1, 'test name', 12, 2000, 'test country', 'test slogan', ['test genre 1', 'test genre 2'], 100)
const itemMovie2 = new Movie(2, 'test name 2', 15, 2020, 'test country 2', 'test slogan 2', ['test genre 3', 'test genre 2'], 30)
const itemBook = new Book(3, 'test book', 'test author', 21, 30)
const itemMusicAlbum = new MusicAlbum(4, 'test album', 'test author', 34)


test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});


test('adding item to cart', () => {
  const cart = new Cart();
  
  cart.add(itemMovie1)
  expect(cart.items[0]).toBe(itemMovie1)
});

test('priceAll function', () => {
  const cart = new Cart();
  cart.add(itemMovie2)
  cart.add(itemBook)
  expect(cart.priceAll()).toBe(36)
});

test('priceAllWithDiscoun function', () => {
  const cart = new Cart();
  cart.add(itemMovie1)
  cart.add(itemMusicAlbum)
  expect(cart.priceAllWithDiscount(50)).toBe(23)
});

test('delete function', () => {
  const cart = new Cart();
  cart.add(itemMovie1)
  cart.add(itemMusicAlbum)
  cart.add(itemMovie2)
  cart.add(itemMusicAlbum)
  cart.deleteItem(2)
  const expectedCart = new Cart()
  expectedCart.add(itemMovie1)
  expectedCart.add(itemMusicAlbum)
  expectedCart.add(itemMusicAlbum)
  expect(cart.items).toEqual(expectedCart.items)
});
