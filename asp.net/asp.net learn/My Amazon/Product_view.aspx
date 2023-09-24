<%@ Page Title="" Language="C#" MasterPageFile="~/clientmaster.master" AutoEventWireup="true" CodeFile="Product_view.aspx.cs" Inherits="Product_view" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <link href="clinet%20css/productview.css" rel="stylesheet" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <asp:Repeater ID="rpt1" runat="server">
        <ItemTemplate>
    <div class="container">
        <div class="row">
            <div class="col-md-6 left">
                <div class="col-md-12">
                   
                    <asp:Image ImageUrl='<%#Eval("thirdcatimg") %>' CssClass="imgcss" ID="image1" runat="server" />

                </div>
            </div>
            <div class="col-md-6 right">
                <div class="pro-details">
                    <div class="col-md-12 title"><%#Eval("thirdcatname") %></div>
                    <div class="col-md-12 price"><%#Eval("thirdcatprice") %></div>
                    <div class="col-md-12 desc">
                        <%#Eval("thirdcatdesc") %>
                    </div>
                    <div class="col-md-12">
                            <%--<a class="btn"  href='confirmordermaster.aspx?orderid=<%#Eval("thirdcatid") %>'></a>--%>
                    <asp:LinkButton CssClass="btn"  style="background-color:#ffa41c !important" OnClick="LinkButton2_Click"  ID="LinkButton2" runat="server">Buy now</asp:LinkButton>


                    </div>
                <div class="col-md-12">
                    <asp:LinkButton CssClass="btn" style="background-color:#ffa41c !important" OnClick="LinkButton1_Click"  ID="LinkButton1" runat="server">Add To cart</asp:LinkButton>
                </div>
            </div>
        </div>
        </div>
    </div>
            </ItemTemplate>
    </asp:Repeater>

</asp:Content>

