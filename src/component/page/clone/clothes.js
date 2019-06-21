import React from 'react'
import './clothes.css'
import Item from '../../item/item.js'
import {connect} from 'react-redux'
import actions from '../../../actions'
import './css/bootstrap.min.css'

function Clone(props){
  const propsOfItem = props.products.Clothes
  const list=propsOfItem.map((product, i) => (
      <div key={i}>
        <Item img={product.img} name={product.name} price={product.price} onClick={()=>props.addProduct(product)}/>
      </div>
    )
  )
  // console.log(list);
  const divide ={};
  return(
    <div>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
        <title>Electro - HTML Ecommerce Template</title>
        {/* Google font */}
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700" rel="stylesheet" />
        {/* Bootstrap */}
        <link type="text/css" rel="stylesheet" href="css/bootstrap.min.css" />
        {/* Slick */}
        <link type="text/css" rel="stylesheet" href="css/slick.css" />
        <link type="text/css" rel="stylesheet" href="css/slick-theme.css" />
        {/* nouislider */}
        <link type="text/css" rel="stylesheet" href="css/nouislider.min.css" />
        {/* Font Awesome Icon */}
        <link rel="stylesheet" href="css/font-awesome.min.css" />
        {/* Custom stlylesheet */}
        <link type="text/css" rel="stylesheet" href="css/style.css" />
        {/* HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries */}
        {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
        {/*[if lt IE 9]>


		<![endif]*/}
        {/* HEADER */}
        <header>
          {/* TOP HEADER */}
          <div id="top-header">
            <div className="container">
              <ul className="header-links pull-left">
                <li><a href="#"><i className="fa fa-phone" /> +021-95-51-84</a></li>
                <li><a href="#"><i className="fa fa-envelope-o" /> email@email.com</a></li>
                <li><a href="#"><i className="fa fa-map-marker" /> 1734 Stonecoal Road</a></li>
              </ul>
              <ul className="header-links pull-right">
                <li><a href="#"><i className="fa fa-dollar" /> USD</a></li>
                <li><a href="#"><i className="fa fa-user-o" /> My Account</a></li>
              </ul>
            </div>
          </div>
          {/* /TOP HEADER */}
          {/* MAIN HEADER */}
          <div id="header">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                {/* LOGO */}
                <div className="col-md-3">
                  <div className="header-logo">
                    <a href="#" className="logo">
                      <img src="./img/logo.png" alt />
                    </a>
                  </div>
                </div>
                {/* /LOGO */}
                {/* SEARCH BAR */}
                <div className="col-md-6">
                  <div className="header-search">
                    <form>
                      <select className="input-select">
                        <option value={0}>All Categories</option>
                        <option value={1}>Category 01</option>
                        <option value={1}>Category 02</option>
                      </select>
                      <input className="input" placeholder="Search here" />
                      <button className="search-btn">Search</button>
                    </form>
                  </div>
                </div>
                {/* /SEARCH BAR */}
                {/* ACCOUNT */}
                <div className="col-md-3 clearfix">
                  <div className="header-ctn">
                    {/* Wishlist */}
                    <div>
                      <a href="#">
                        <i className="fa fa-heart-o" />
                        <span>Your Wishlist</span>
                        <div className="qty">2</div>
                      </a>
                    </div>
                    {/* /Wishlist */}
                    {/* Cart */}
                    <div className="dropdown">
                      <a className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                        <i className="fa fa-shopping-cart" />
                        <span>Your Cart</span>
                        <div className="qty">3</div>
                      </a>
                      <div className="cart-dropdown">
                        <div className="cart-list">
                          <div className="product-widget">
                            <div className="product-img">
                              <img src="./img/product01.png" alt />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name"><a href="#">product name goes here</a></h3>
                              <h4 className="product-price"><span className="qty">1x</span>$980.00</h4>
                            </div>
                            <button className="delete"><i className="fa fa-close" /></button>
                          </div>
                          <div className="product-widget">
                            <div className="product-img">
                              <img src="./img/product02.png" alt />
                            </div>
                            <div className="product-body">
                              <h3 className="product-name"><a href="#">product name goes here</a></h3>
                              <h4 className="product-price"><span className="qty">3x</span>$980.00</h4>
                            </div>
                            <button className="delete"><i className="fa fa-close" /></button>
                          </div>
                        </div>
                        <div className="cart-summary">
                          <small>3 Item(s) selected</small>
                          <h5>SUBTOTAL: $2940.00</h5>
                        </div>
                        <div className="cart-btns">
                          <a href="#">View Cart</a>
                          <a href="#">Checkout  <i className="fa fa-arrow-circle-right" /></a>
                        </div>
                      </div>
                    </div>
                    {/* /Cart */}
                    {/* Menu Toogle */}
                    <div className="menu-toggle">
                      <a href="#">
                        <i className="fa fa-bars" />
                        <span>Menu</span>
                      </a>
                    </div>
                    {/* /Menu Toogle */}
                  </div>
                </div>
                {/* /ACCOUNT */}
              </div>
              {/* row */}
            </div>
            {/* container */}
          </div>
          {/* /MAIN HEADER */}
        </header>
        {/* /HEADER */}
        {/* NAVIGATION */}
        <nav id="navigation">
          {/* container */}
          <div className="container">
            {/* responsive-nav */}
            <div id="responsive-nav">
              {/* NAV */}
              <ul className="main-nav nav navbar-nav">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">Hot Deals</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">Laptops</a></li>
                <li><a href="#">Smartphones</a></li>
                <li><a href="#">Cameras</a></li>
                <li><a href="#">Accessories</a></li>
              </ul>
              {/* /NAV */}
            </div>
            {/* /responsive-nav */}
          </div>
          {/* /container */}
        </nav>
        {/* /NAVIGATION */}
        {/* BREADCRUMB */}
        <div id="breadcrumb" className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-12">
                <ul className="breadcrumb-tree">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">All Categories</a></li>
                  <li><a href="#">Accessories</a></li>
                  <li className="active">Headphones (227,490 Results)</li>
                </ul>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /BREADCRUMB */}
        {/* SECTION */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* ASIDE */}
              <div id="aside" className="col-md-3">
                {/* aside Widget */}
                <div className="aside">
                  <h3 className="aside-title">Categories</h3>
                  <div className="checkbox-filter">
                    <div className="input-checkbox">
                      <input type="checkbox" id="category-1" />
                      <label htmlFor="category-1">
                        <span />
                        Laptops
                        <small>(120)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="category-2" />
                      <label htmlFor="category-2">
                        <span />
                        Smartphones
                        <small>(740)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="category-3" />
                      <label htmlFor="category-3">
                        <span />
                        Cameras
                        <small>(1450)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="category-4" />
                      <label htmlFor="category-4">
                        <span />
                        Accessories
                        <small>(578)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="category-5" />
                      <label htmlFor="category-5">
                        <span />
                        Laptops
                        <small>(120)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="category-6" />
                      <label htmlFor="category-6">
                        <span />
                        Smartphones
                        <small>(740)</small>
                      </label>
                    </div>
                  </div>
                </div>
                {/* /aside Widget */}
                {/* aside Widget */}
                <div className="aside">
                  <h3 className="aside-title">Price</h3>
                  <div className="price-filter">
                    <div id="price-slider" />
                    <div className="input-number price-min">
                      <input id="price-min" type="number" />
                      <span className="qty-up">+</span>
                      <span className="qty-down">-</span>
                    </div>
                    <span>-</span>
                    <div className="input-number price-max">
                      <input id="price-max" type="number" />
                      <span className="qty-up">+</span>
                      <span className="qty-down">-</span>
                    </div>
                  </div>
                </div>
                {/* /aside Widget */}
                {/* aside Widget */}
                <div className="aside">
                  <h3 className="aside-title">Brand</h3>
                  <div className="checkbox-filter">
                    <div className="input-checkbox">
                      <input type="checkbox" id="brand-1" />
                      <label htmlFor="brand-1">
                        <span />
                        SAMSUNG
                        <small>(578)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="brand-2" />
                      <label htmlFor="brand-2">
                        <span />
                        LG
                        <small>(125)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="brand-3" />
                      <label htmlFor="brand-3">
                        <span />
                        SONY
                        <small>(755)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="brand-4" />
                      <label htmlFor="brand-4">
                        <span />
                        SAMSUNG
                        <small>(578)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="brand-5" />
                      <label htmlFor="brand-5">
                        <span />
                        LG
                        <small>(125)</small>
                      </label>
                    </div>
                    <div className="input-checkbox">
                      <input type="checkbox" id="brand-6" />
                      <label htmlFor="brand-6">
                        <span />
                        SONY
                        <small>(755)</small>
                      </label>
                    </div>
                  </div>
                </div>
                {/* /aside Widget */}
                {/* aside Widget */}
                <div className="aside">
                  <h3 className="aside-title">Top selling</h3>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product01.png" alt />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product02.png" alt />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                  <div className="product-widget">
                    <div className="product-img">
                      <img src="./img/product03.png" alt />
                    </div>
                    <div className="product-body">
                      <p className="product-category">Category</p>
                      <h3 className="product-name"><a href="#">product name goes here</a></h3>
                      <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                    </div>
                  </div>
                </div>
                {/* /aside Widget */}
              </div>
              {/* /ASIDE */}
              {/* STORE */}
              <div id="store" className="col-md-9">
                {/* store top filter */}
                <div className="store-filter clearfix">
                  <div className="store-sort">
                    <label>
                      Sort By:
                      <select className="input-select">
                        <option value={0}>Popular</option>
                        <option value={1}>Position</option>
                      </select>
                    </label>
                    <label>
                      Show:
                      <select className="input-select">
                        <option value={0}>20</option>
                        <option value={1}>50</option>
                      </select>
                    </label>
                  </div>
                  <ul className="store-grid">
                    <li className="active"><i className="fa fa-th" /></li>
                    <li><a href="#"><i className="fa fa-th-list" /></a></li>
                  </ul>
                </div>
                {/* /store top filter */}
                {/* store products */}
                <div className="row">
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product01.png" alt />
                        <div className="product-label">
                          <span className="sale">-30%</span>
                          <span className="new">NEW</span>
                        </div>
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product02.png" alt />
                        <div className="product-label">
                          <span className="new">NEW</span>
                        </div>
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                  <div className="clearfix visible-sm visible-xs" />
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product03.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                  <div className="clearfix visible-lg visible-md" />
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product04.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                  <div className="clearfix visible-sm visible-xs" />
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product05.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product06.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star-o" />
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                  <div className="clearfix visible-lg visible-md visible-sm visible-xs" />
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product07.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product08.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                  <div className="clearfix visible-sm visible-xs" />
                  {/* product */}
                  <div className="col-md-4 col-xs-6">
                    <div className="product">
                      <div className="product-img">
                        <img src="./img/product09.png" alt />
                      </div>
                      <div className="product-body">
                        <p className="product-category">Category</p>
                        <h3 className="product-name"><a href="#">product name goes here</a></h3>
                        <h4 className="product-price">$980.00 <del className="product-old-price">$990.00</del></h4>
                        <div className="product-rating">
                        </div>
                        <div className="product-btns">
                          <button className="add-to-wishlist"><i className="fa fa-heart-o" /><span className="tooltipp">add to wishlist</span></button>
                          <button className="add-to-compare"><i className="fa fa-exchange" /><span className="tooltipp">add to compare</span></button>
                          <button className="quick-view"><i className="fa fa-eye" /><span className="tooltipp">quick view</span></button>
                        </div>
                      </div>
                      <div className="add-to-cart">
                        <button className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> add to cart</button>
                      </div>
                    </div>
                  </div>
                  {/* /product */}
                </div>
                {/* /store products */}
                {/* store bottom filter */}
                <div className="store-filter clearfix">
                  <span className="store-qty">Showing 20-100 products</span>
                  <ul className="store-pagination">
                    <li className="active">1</li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#"><i className="fa fa-angle-right" /></a></li>
                  </ul>
                </div>
                {/* /store bottom filter */}
              </div>
              {/* /STORE */}
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /SECTION */}
        {/* NEWSLETTER */}
        <div id="newsletter" className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-12">
                <div className="newsletter">
                  <p>Sign Up for the <strong>NEWSLETTER</strong></p>
                  <form>
                    <input className="input" type="email" placeholder="Enter Your Email" />
                    <button className="newsletter-btn"><i className="fa fa-envelope" /> Subscribe</button>
                  </form>
                  <ul className="newsletter-follow">
                    <li>
                      <a href="#"><i className="fa fa-facebook" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-twitter" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-instagram" /></a>
                    </li>
                    <li>
                      <a href="#"><i className="fa fa-pinterest" /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /NEWSLETTER */}
        {/* FOOTER */}
        <footer id="footer">
          {/* top footer */}
          <div className="section">
            {/* container */}
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
                    <ul className="footer-links">
                      <li><a href="#"><i className="fa fa-map-marker" />1734 Stonecoal Road</a></li>
                      <li><a href="#"><i className="fa fa-phone" />+021-95-51-84</a></li>
                      <li><a href="#"><i className="fa fa-envelope-o" />email@email.com</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Categories</h3>
                    <ul className="footer-links">
                      <li><a href="#">Hot deals</a></li>
                      <li><a href="#">Laptops</a></li>
                      <li><a href="#">Smartphones</a></li>
                      <li><a href="#">Cameras</a></li>
                      <li><a href="#">Accessories</a></li>
                    </ul>
                  </div>
                </div>
                <div className="clearfix visible-xs" />
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Information</h3>
                    <ul className="footer-links">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Contact Us</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Orders and Returns</a></li>
                      <li><a href="#">Terms &amp; Conditions</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-3 col-xs-6">
                  <div className="footer">
                    <h3 className="footer-title">Service</h3>
                    <ul className="footer-links">
                      <li><a href="#">My Account</a></li>
                      <li><a href="#">View Cart</a></li>
                      <li><a href="#">Wishlist</a></li>
                      <li><a href="#">Track My Order</a></li>
                      <li><a href="#">Help</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
          {/* /top footer */}
          {/* bottom footer */}
          <div id="bottom-footer" className="section">
            <div className="container">
              {/* row */}
              <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="footer-payments">
                    <li><a href="#"><i className="fa fa-cc-visa" /></a></li>
                    <li><a href="#"><i className="fa fa-credit-card" /></a></li>
                    <li><a href="#"><i className="fa fa-cc-paypal" /></a></li>
                    <li><a href="#"><i className="fa fa-cc-mastercard" /></a></li>
                    <li><a href="#"><i className="fa fa-cc-discover" /></a></li>
                    <li><a href="#"><i className="fa fa-cc-amex" /></a></li>
                  </ul>
                  <span className="copyright">
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                    Copyright © All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                    {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  </span>
                </div>
              </div>
              {/* /row */}
            </div>
            {/* /container */}
          </div>
          {/* /bottom footer */}
        </footer>
        {/* /FOOTER */}
        {/* jQuery Plugins */}
    </div>
  )
}
const mapStateToProps = state => {
  return state
}

const mapDispatchToProps = dispatch => {
  return {
    addProduct: product => {
      dispatch(actions.addProduct(product))
    },
    sortByName: condition =>{
      dispatch(actions.sortByName(condition))
    },
    sortByPrice: condition =>{
      dispatch(actions.sortByPrice(condition))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clone)
