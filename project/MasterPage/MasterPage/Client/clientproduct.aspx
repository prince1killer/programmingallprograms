<%@ Page Title="" Language="C#" MasterPageFile="~/Client/ClientMasterPage.master" AutoEventWireup="true" CodeFile="clientproduct.aspx.cs" Inherits="Client_clientproduct" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">

    <section id="advertisement">
        <div class="container">
            <img src="images/shop/advertisement.jpg" alt="" />
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
              

                <div class="col-sm-12 padding-right">
                    <div class="features_items">
                        <!--features_items-->
                        <h2 class="title text-center">Sub Category Items</h2>
                        

                        <asp:Repeater runat="server" ID="productimgrpt">
                            <ItemTemplate>

                         <div class="col-sm-4">
                            <div class="product-image-wrapper">
                                <div class="single-products">
                                    <div class="productinfo text-center">

                                        <asp:Image ImageUrl='<%#Eval("subcategoryimg") %>' runat="server" />

										<a href='clientsubcategory.aspx?subcat=<%#Eval("subcategory") %>' class="btn btn-default add-to-cart"><%#Eval("subcategory") %></a>
                                        
                                        <%--<a href="#" class="btn btn-default add-to-cart"><%#Eval("subcategory") %></a>--%>
                                    </div>
                                    <%--<div class="product-overlay">
                                        <div class="overlay-content">
                                            <h2>$56</h2>
                                            <p>Easy Polo Black Edition</p>
                                            <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                        </div>
                                    </div>--%>
                                </div>
                                <div class="choose">
                                    <ul class="nav nav-pills nav-justified">
                                        <li><a href=""><i class="fa fa-plus-square"></i>Add to wishlist</a></li>
                                        <li><a href=""><i class="fa fa-plus-square"></i>Add to compare</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                            </ItemTemplate>
                        </asp:Repeater>

                       
                        </div>


                        <ul class="pagination">
                            <li class="active"><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                            <li><a href="">&raquo;</a></li>
                        </ul>
                    
                    <!--features_items-->
                </div>
            </div>
        </div>
    </section>


</asp:Content>

