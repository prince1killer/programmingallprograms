<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="a_summaryreport.aspx.cs" Inherits="a_summaryreport" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">


    <asp:TextBox ID="TextBox1" runat="server" TextMode="Date"></asp:TextBox>
    <asp:TextBox ID="TextBox2" runat="server" TextMode="Date"></asp:TextBox>
    <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click"/>

    <asp:GridView ID="reportsummary" runat="server">

    </asp:GridView>


</asp:Content>

