<%@ Page Title="" Language="C#" MasterPageFile="~/AdminMaster.master" AutoEventWireup="true" CodeFile="admin_edit.aspx.cs" Inherits="admin_edit" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

       
        <div class="add_category">

            
            <%--title start--%>
            <div class="title">

                <h4>Show Order</h4>
                <a href="a_addcategory.aspx"><i class="fa fa-arrow-circle-left">Back</i></a>
              
            </div>
            <%--title End--%>

            
            <%--form start--%>
            <div class="form">

                 <p>Product_Id</p>
                <asp:TextBox runat="server" class="t1" ID="productid"/>

              

                  <p>Invoice</p>
                <asp:TextBox runat="server" class="t1" ID="invoice"/>

                 <p>Client_Id</p>
                <asp:TextBox runat="server" class="t1" ID="clientid"/>


                <p>Status</p>
                <asp:TextBox runat="server" class="t1" ID="status"/>

                <br /> <br />
                <%--<a href="#" id="savebtn"> <i class="fa fa-save">Save</i></a>--%> &nbsp;
                <asp:Button  ID="savebtn" runat="server" OnClick="savebtn_Click" Text="Save"  class="save" Width="90px"  />
                
                <asp:Button  ID="cancel" runat="server" Text="Cancel" OnClick="cancel_Click" class="delete"/>
                
                <%--<a href="#" class="cancle">Cancel</a>--%>



            </div>
            <%--form End--%>

        </div>

</asp:Content>

