<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="a_third.aspx.cs" Inherits="a_third" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

        <%--Add Category Start--%>
         
        <div class="add_category">

            
            <%--title start--%>
            <div class="title">

                <h4>Third Category</h4>
                <a href="a_addcategory.aspx"> <i class="fa fa-arrow-circle-left">Back</i> </a>

            </div>
            <%--title End--%>

            
            <%--form start--%>
            <div class="form">

                <p>Category</p>
                <asp:DropDownList runat="server" ID="category_dropdown" CssClass="t1" AutoPostBack="True" OnSelectedIndexChanged="category_dropdown_SelectedIndexChanged">
                </asp:DropDownList>

                <p>Sub Category</p>
                <asp:DropDownList runat="server" ID="subcategorytextbox" CssClass="t1"> </asp:DropDownList>               
                <%--<asp:TextBox runat="server" ID="subcategorytextbox" class="subtext"/>--%>
              
                <p>Third Category</p>
                <asp:TextBox runat="server" ID="thirdcategorytextbox" class="t1"/>

                <p>Status</p>
                <asp:DropDownList runat="server" class="t1" ID="t2">
                    <asp:ListItem Text="Active" />
                    <asp:ListItem Text="DeActive" />
                </asp:DropDownList>

                <%--<a href="#" id="savebtn"> <i class="fa fa-save">Save</i></a>--%> &nbsp;
                <br />
                <asp:Button  ID="Button1" runat="server"   Text="save"  class="save" OnClick="Button1_Click"/>
                
                <asp:Button  ID="Button2" runat="server" Text="cancel"  class="delete"/>
                

               </div>
        </div>

</asp:Content>

