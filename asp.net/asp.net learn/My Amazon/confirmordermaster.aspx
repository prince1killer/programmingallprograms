<%@ Page Title="" Language="C#" MasterPageFile="~/clientmaster.master" AutoEventWireup="true" CodeFile="confirmordermaster.aspx.cs" Inherits="confirmordermaster" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
    <style>
        
.btn {
    background: #f3d078;
    background: -webkit-linear-gradient(top,#f7dfa5,#f0c14b);
    width: 100%;
    background: linear-gradient(to bottom,#f7dfa5,#f0c14b);
}
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
    <div class="main">
    <asp:DataList ID="DataList1" runat="server">
        
        <ItemTemplate>
            <div style="flex:1" class="my-card">
                <div  padding: 10px;" class="image__section">
                    <asp:Image ID="Image1" CssClass="image__class" ImageUrl='<%#Eval("thirdcatimg") %>' runat="server" />
                </div>
                <div  class="productdetail__section">
                    <h4 style="padding:10px"><%#Eval("thirdcatname") %></h4>
                    <h1 style="padding:10px"><strong>₹<%#Eval("thirdcatprice") %>/-</strong></h1>
                    <p style="padding:10px">
                    <%#Eval("thirdcatdesc") %>
                    </p>
                </div>
           </div>
        </ItemTemplate>
    </asp:DataList>


      <div style="flex:1" class="address__Section">

                    <asp:TextBox placeholder="Address Line 1" Height="60px"  Style="resize: none;padding:5px; margin-bottom: 5px;" Width="100%" ValidationGroup="add" ID="TextBox1" runat="server"></asp:TextBox>
          <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="TextBox1" ValidationGroup="add" ErrorMessage=" Enter Address ...."></asp:RequiredFieldValidator>
             <asp:TextBox placeholder="Address Line 2" Height="60px" Style="resize: none;padding:5px; margin-bottom: 5px;" Width="100%" ValidationGroup="add" ID="TextBox2" runat="server"></asp:TextBox>
          <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="TextBox2" ValidationGroup="add" ErrorMessage=" Enter Address ...."></asp:RequiredFieldValidator>
             <asp:TextBox placeholder=" City..."  Height="50px"  Style="resize: none;   margin-bottom: 5px;" Width="100%" ValidationGroup="add" ID="TextBox3" runat="server"></asp:TextBox>
          <asp:RequiredFieldValidator ID="RequiredFieldValidator3" runat="server" ControlToValidate="TextBox3" ValidationGroup="add" ErrorMessage=" Enter Address ...."></asp:RequiredFieldValidator>
                    <asp:Button OnClick="Button1_Click" ID="Button1" ValidationGroup="add" CssClass="btn" runat="server" Text="Confirm Order" />
                </div>
        </div>
</asp:Content>

