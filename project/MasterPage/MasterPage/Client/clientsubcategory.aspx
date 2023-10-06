<%@ Page Title="" Language="C#" MasterPageFile="~/Client/ClientMasterPage.master" EnableEventValidation="false" AutoEventWireup="true" CodeFile="clientsubcategory.aspx.cs" Inherits="clientsubcategory" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

      <section id="advertisement">
        <div class="container">
            <img src="images/shop/advertisement.jpg" alt="" />
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
               
                <%--filter start--%>

                <div  class="col-sm-2 padding-right">

                    Price :- <asp:TextBox runat="server" type="text" ID="mintxt"/> <br /><br />
                     <asp:TextBox runat="server" type="text" ID="maxtxt"/>
                    <br /><br />

                    <asp:Button Text="Submit" ID="filterbtn" runat="server" OnClick="filterbtn_Click"/>
                    <br /><br />

                    <asp:DropDownList runat="server" ID="shortby" AutoPostBack="true" OnSelectedIndexChanged="shortby_SelectedIndexChanged">
                        <asp:ListItem Text="--- Sort By ---" />
                        <asp:ListItem Text="High To Low" />
                        <asp:ListItem Text="Low To High" />
                    </asp:DropDownList>

                    <asp:DropDownList runat="server" ID="color" AutoPostBack="true" OnSelectedIndexChanged="color_SelectedIndexChanged">
                        <asp:ListItem Text="--- Select Color ---" />
                        <asp:ListItem Text="Black" value="#000000"/>
                        <asp:ListItem Text="White" value="#ffffff"/>
                        <asp:ListItem Text="Blue" value="#0000ff"/>
                        <asp:ListItem Text="Red" value="#ff0000"/>


                    </asp:DropDownList>

                </div>

                <%--filter End--%>


                <div class="col-sm-10 padding-right">
                    <div class="features_items">
                        <!--features_items-->
                        <h2 class="title text-center">Features Items</h2>
                        

                        <asp:Repeater runat="server" ID="productimgrpt">
                            <ItemTemplate>

                         <div class="col-sm-4">
                            <div class="product-image-wrapper">
                                <div class="single-products">
                                    <div class="productinfo text-center">

                                        <asp:Image ImageUrl='<%#Eval("productimage") %>' runat="server" />
                                       <h2><%#Eval("productprice") %></h2>
                                        <p><%#Eval("productname") %></p>
                                        <a href="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                    </div>
                                    <div class="product-overlay">
                                        <div class="overlay-content">
                                            <h2><%#Eval("productprice") %></h2>
                                            <p><%#Eval("productname") %></p>
                                            <a href='clientproductdetail.aspx?pname=<%#Eval("productname") %>' class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</a>
                                        </div>
                                    </div>
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

