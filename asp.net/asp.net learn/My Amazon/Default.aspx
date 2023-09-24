<%@ Page Title="" Language="C#" MasterPageFile="~/clientmaster.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <link href="clinet%20css/product.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
        <img
                        class="home__image"
                        src="https://store-images.s-microsoft.com/image/apps.16285.14618985536919905.552c0017-6644-49a8-8467-8f7b34ce0428.30ad6b05-16d9-4d5e-a242-43107708a16a?mode=scale&q=90&h=1080&w=1920"
                        alt="" />
    <div class=" container">

        <%--<a href="">content</a>--%>
        <div class="row">
            <asp:Repeater ID="Repeater1" runat="server">

                <ItemTemplate>

                    <div class="col-lg-4 col-md-6 col-sm-12 ">

                        <div class="product">
                            <div class="product__info">
                                <b>
                                    <p><%# Eval("thirdcatname") %></p>
                                </b>
                                <p class="product__price">
                                    <%--<small>$</small>--%>
                                    <strong>$<%# Eval("thirdcatprice") %></strong>
                                </p>
                                <div class="product__desc">
                                    <%# Eval("thirdcatdesc") %>
                                </div>
                            </div>

                            <asp:Image ID="Image1" ImageUrl='<%#Eval("thirdcatimg") %>' runat="server" />


                            <div class="buttons_group">

                                <%--<button>Add to Basket</button>--%>
                                <%--<button></button>--%>
                            <a style="width:100%" class="btn" href='product_view.aspx?edit=<%#Eval("thirdcatid")%>'>View</a>
                            <%--<a class="btn" href="#">Add to cart</a>--%>


                            </div>


                        </div>
                    </div>

                </ItemTemplate>

            </asp:Repeater>
        </div>
    </div>



</asp:Content>

