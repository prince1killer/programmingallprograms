<%@ page title="" language="C#" masterpagefile="~/Comon.master" autoeventwireup="true" inherits="PrivateVehical, App_Web_grc3h2em" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" Runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">
    <h3>Private Vehical</h3>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" Runat="Server">
     <div class="row">
        <div class="col-md-6">
            <div class="form-group">
                <asp:DropDownList ID="DropDownList1" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your name." AutoPostBack="True" OnSelectedIndexChanged="DropDownList1_SelectedIndexChanged">


                </asp:DropDownList>
                <p class="help-block text-danger"></p>


            </div>

        </div>
        <div class="col-md-6">
            <div class="form-group">
                <asp:DropDownList ID="DropDownList2" runat="server" CssClass="form-control" required="required" data-validation-required-message="Please enter your Name">
                    <asp:ListItem Value="0">--Select Destination--</asp:ListItem>


                </asp:DropDownList>
                <p class="help-block text-danger"></p>

            </div>
        </div>
        <div class="clearfix"></div>
        <div class="col-lg-12 text-center">
            <div id="success"></div>
           <%-- <asp:Button ID="Button1" runat="server" Text="Show My Route" CssClass="btn btn-primary " OnClick="Button1_Click" />--%>
            
            <asp:Button ID="Button2" runat="server" Text="Show" CssClass="btn btn-primary " OnClick="Button2_Click"  />
        </div>
    </div>

    <div class="myroot">
        <div class="row">
            <div class="col-md-offset-3 col-md-7 ">
                <asp:DataList ID="DataList1" runat="server" Width="100%">
                    <ItemTemplate>
                        <asp:LinkButton ID="LinkButton1" runat="server" CommandArgument='<%# Eval("Id") %>'>
                        <div class="box">
                            <div class="title">
                                <asp:Label ID="Label4" runat="server" Text='<%# Eval("Bus_name") %>'></asp:Label>
                                 (<asp:Label ID="Label5" runat="server" Text='<%# Eval("start_time") %>'></asp:Label>)
                                  <asp:Label ID="Label1" runat="server" Text='<%# Eval("Bus_type") %>'></asp:Label>
                            </div>
                            <div class="detail clearfix">
                            <div class="pull-left">
                                   <label>
                                   Source City: 
                               </label>
                                 <asp:Label ID="Label3" runat="server" Text='<%# Eval("source") %>'>Source City</asp:Label>
                            </div>
                                 <div class="pull-right">
                                     <label>
                                   Destination City: 
                               </label>
                                <asp:Label ID="Label2" runat="server" CssClass="pull-right" Text='<%# Eval("des") %>'></asp:Label>
                                 </div>
                            </div>
                        </div>
                            </asp:LinkButton>
                    </ItemTemplate>
                </asp:DataList>
             <asp:DataList ID="DataList2" runat="server" Width="100%" OnItemDataBound="DataList1_ItemDataBound" >
                                <ItemTemplate >
                                    <asp:LinkButton ID="LinkButton1" runat="server" CommandArgument='<%# Eval("Id") %>'>
                                        <div class="box">
                                            <div class="row">
                                                <div class="col-sm-2">
                                                    <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("img") %>'/>
                                                </div>
                                                <div class="col-sm-10">
                                                    <div class="title">
                                                        <label>
                                                            Name :  
                                                        </label>
                                                        <asp:Label ID="Label4" runat="server" Text='<%# Eval("name") %>'></asp:Label>
                                                    </div>
                                                    <div class="detail">
                                                        <label>
                                                            Contact Number :  
                                                        </label>
                                                        <asp:Label ID="Label1" runat="server" Text='<%# Eval("contact") %>'>Source City</asp:Label>
                                                    </div>
                                                    <div class="detail">
                                                        <label>
                                                            Liecence Number :  
                                                        </label>
                                                        <asp:Label ID="Label5" runat="server" Text='<%# Eval("Liecence_No") %>'>Source City</asp:Label>
                                                    </div>
                                                    <div class="detail">
                                                        <label>
                                                            Vehicle Number :  
                                                        </label>
                                                        <asp:Label ID="Label6" runat="server" Text='<%# Eval("Vehical_No") %>'>Source City</asp:Label>
                                                    </div>
                                                    <div class="detail clearfix">
                                                        <div class="pull-left">
                                                            <label>
                                                                Start Time :  
                                                            </label>
                                                            <asp:Label ID="Label3" runat="server" Text='<%# Eval("start_time") %>'>Source City</asp:Label>
                                                        </div>
                                                        <div class="pull-right">
                                                            <label>
                                                                End Time : 
                                                            </label>
                                                            <asp:Label ID="Label2" runat="server" CssClass="pull-right" Text='<%# Eval("end-time") %>'></asp:Label>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        </div>
                                    </asp:LinkButton>
                                </ItemTemplate>
                            </asp:DataList>
            </div>
        </div>
    </div>
</asp:Content>

