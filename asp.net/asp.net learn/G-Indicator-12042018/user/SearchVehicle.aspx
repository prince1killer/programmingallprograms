<%@ page title="" language="C#" masterpagefile="~/user/userMaster.master" autoeventwireup="true" inherits="user_SearchVehicle, App_Web_0y3sbzug" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div class="container">
        <div class="row">
            <div class="col-xs-10 col-xs-offset-1">
                <div class="myform">

                    <h3>Search Vehicle</h3>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div class="row" style="padding-top: 30px;">
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <asp:DropDownList ID="DropVehicleType" runat="server" CssClass="form-control" AutoPostBack="True" OnSelectedIndexChanged="DropVehicleType_SelectedIndexChanged"></asp:DropDownList>

                                    </div>
                                </div>
                                <asp:Panel ID="PanelCarBike" runat="server" Visible="false">
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <asp:DropDownList ID="dropSourceCity" runat="server" CssClass="form-control" AutoPostBack="True" OnSelectedIndexChanged="dropSourceCity_SelectedIndexChanged"></asp:DropDownList>

                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="form-group">
                                        <asp:DropDownList ID="dropDestCity" runat="server" CssClass="form-control" AutoPostBack="True"></asp:DropDownList>

                                    </div>
                                </div>
                                </asp:Panel>
                                <asp:Panel ID="OtherVehicle" runat="server" Visible="false">
                                    <div class="col-sm-4">
                                    <div class="form-group">
                                        <asp:TextBox ID="TextBox1" runat="server" CssClass="form-control" placeholder="Enter Area">
                                        </asp:TextBox>
                                    </div>
                                </div>
                                </asp:Panel>
                            </div>
                            <div class="row" >

                                <div class="col-md-12 text-center">
                                    <asp:Button ID="Button1" runat="server" Text="Search" CssClass="btn btn-primary btn-lg" OnClick="Button1_Click" />
                                </div>

                            </div>
                           <br />
                           <br />
                            <div id="alert_placeholder">
                            </div>
                            <asp:DataList ID="DataList1" runat="server" Width="100%" OnItemDataBound="DataList1_ItemDataBound" >
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
                                                    <asp:Panel ID="Panel1" runat="server">
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
                                                            <asp:Label ID="Label2" runat="server" CssClass="pull-right" Text='<%# Eval("end_time") %>'></asp:Label>
                                                        </div>
                                                    </div>
                                                        </asp:Panel>
                                                    <asp:Panel ID="Panel4" runat="server">

                                                <div class="detail">
                                                    <div class="row">
                                                        <div class="col-sm-6">
                                                            <label>
                                                                Area : 
                                                            </label>
                                                            <asp:Label ID="Label12" runat="server" Text='<%# Eval("area") %>'></asp:Label>
                                                        </div>
                                                        <div class="col-sm-6">
                                                            <label>
                                                                Rate : 
                                                            </label>
                                                            <asp:Label ID="Label9" runat="server" Text='<%# Eval("rate") %>'></asp:Label>
                                                            Rs
                                                        </div>

                                                    </div>

                                                </div>
                                                <div class="detail">
                                                    <label>
                                                        Facility : 
                                                    </label>
                                                    <asp:Label ID="Label10" runat="server" Text='<%# Eval("facility") %>'></asp:Label>
                                                </div>
                                                <div class="detail">
                                                    <label>
                                                        Vehicle Image : 
                                                    </label>
                                                    <asp:Image ID="Image2" runat="server" ImageUrl='<%# Eval("vehical_img") %>' Height="150" Width="150" />
                                                </div>
                                            </asp:Panel>
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
            </div>
        </div>
    </div>
     <script src="js/jquery-2.1.1.min.js"></script>
     <script type="text/javascript">
         function showalert(message, alerttype) {
             $('#alert_placeholder').append('<div id="alertdiv" class="alert ' + alerttype + ' fade in"><a class="close" data-dismiss="alert">×</a><span class="text-center">' + message + '</span></div>')
             setTimeout(function () {
                 $("#alertdiv").remove();
             }, 5000);
         }
        </script>
</asp:Content>

