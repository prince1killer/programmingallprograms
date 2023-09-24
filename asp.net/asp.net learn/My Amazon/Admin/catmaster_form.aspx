<%@ Page Title="" Language="C#" MasterPageFile="~/Admin/Admin.master" AutoEventWireup="true" CodeFile="catmaster_form.aspx.cs" Inherits="Admin_A_CustomerForm" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="Contenttitle" Runat="Server">
    Costomer form
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="Contenttitle2" Runat="Server">
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ContentButton" Runat="Server">
    <a href="catmaster.aspx" class="btn btn-info"><i class="fa fa-angle-left"></i>&nbsp;Back</a>
</asp:Content>

<asp:Content ID="Content5" ContentPlaceHolderID="ContentPage" Runat="Server">
    <div class="panel panel-default">
         <div class="panel-heading">
            Faq's Form
        </div> 
        <div class="panel-body">
            <div class="form-vertical">
                <div class="form-group">
                    <label>Category Name</label>
                    <asp:TextBox ID="TextBox1" CssClass="form-control" runat="server"></asp:TextBox>
                </div>

                


                <%--<div class="form-group">
                    <label>Email</label>
                    <asp:TextBox ID="TextBox2" CssClass="form-control" runat="server"></asp:TextBox>
                </div>

                <div class="form-group">
                    <label>Mobile</label>
                    <asp:TextBox ID="TextBox3" CssClass="form-control" runat="server"></asp:TextBox>
                </div>

                <div class="form-group">
                    <label>Join Date</label>
                    <asp:TextBox ID="TextBox4" CssClass="form-control" runat="server"></asp:TextBox>
                </div>

                <div class="form-group">
                    <label>Status</label>
                    <asp:DropDownList ID="drop1" runat="server" CssClass="form-control" >
                        <asp:ListItem Value="Active" Text="Active" />
                        <asp:ListItem Value="Deactive" Text="Deactive" />
                    </asp:DropDownList>
                </div>--%>

            </div>
        </div>
        <div class="panel-footer">
            <asp:LinkButton runat="server" ID="lnk1" CssClass="btn btn-info btn-sm " OnClick="lnk1_Click"> <i class="fa fa-save"></i> &nbsp;Save</asp:LinkButton>
        </div>
    </div>
</asp:Content>

