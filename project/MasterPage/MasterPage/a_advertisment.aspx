﻿<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="a_advertisment.aspx.cs" Inherits="a_advertisment" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <div class="add_category">

            
            <%--title start--%>
            <div class="title">

                <h4>Advertisment</h4>
                <a href="a_addcategory.aspx"> <i class="fa fa-arrow-circle-left">Back</i> </a>

            </div>
            <%--title End--%>

            
            <%--form start--%>
            <div class="form">

                <p>Title</p>
                <asp:TextBox runat="server" ID="titletext" class="t1"/>


                <p>Product Name</p>
                <asp:TextBox runat="server" ID="subcategorytextbox" class="t1"/>
                <%--<asp:TextBox runat="server" class="subtext" ID="t1"/>--%>

                <p>Description</p>
                <asp:TextBox runat="server" ID="descriptiontxt" class="t1" TextMode="MultiLine"/>

                <p>Product Image</p>
                <asp:FileUpload ID="productimage" runat="server" />
                <asp:Image ImageUrl="imageurl" ID="img" class="pimg" runat="server" />

                <p>Status</p>
                <asp:DropDownList runat="server" class="t1" ID="t2">
                    <asp:ListItem Text="Active" />
                    <asp:ListItem Text="DeActive" />
                </asp:DropDownList>

                <%--<a href="#" id="savebtn"> <i class="fa fa-save">Save</i></a>--%> &nbsp;
                <asp:Button  ID="Button1" runat="server"   Text="save"  class="save" OnClick="Button1_Click"  />
                
                <asp:Button  ID="Button2" runat="server" Text="cancel"  class="delete"/>
                

               </div>
        </div>


</asp:Content>

