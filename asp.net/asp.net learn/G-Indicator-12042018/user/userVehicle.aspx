<%@ page title="" language="C#" masterpagefile="~/user/userMaster.master" autoeventwireup="true" inherits="user_userVehicle, App_Web_0y3sbzug" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="Server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="Server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder2" runat="Server">
    <div id="contactForm">
        <div class="row">
            <div class="col-xs-8 col-xs-offset-2">
                <div class="myform">
                    <h3>
                        <asp:Label ID="Label5" runat="server" Text="Label"></asp:Label></h3>
                    <%--<asp:Label ID="Label7" runat="server" Text="Label" ></asp:Label>--%>
                    <div class="row">
                        <div class="col-sm-10 col-sm-offset-1">
                            <div id="alert_placeholder">
                            </div>
                            <asp:Panel ID="Panel1" runat="server">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <div class="form-group">
                                            <asp:DropDownList ID="DropVehicleType" runat="server" CssClass="form-control">
                                            </asp:DropDownList>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <asp:TextBox ID="Vnumber" runat="server" CssClass="form-control" placeholder="Vehicle Number"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <asp:TextBox ID="Lnumber" runat="server" CssClass="form-control" placeholder="Liecence Number"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <asp:TextBox ID="TextBox2" runat="server" CssClass="form-control" placeholder="Start Time"></asp:TextBox>
                                        </div>
                                        <div class="form-group">
                                            <asp:DropDownList ID="dropSourceCity" runat="server" CssClass="form-control" AutoPostBack="True"
                                                OnSelectedIndexChanged="dropSourceCity_SelectedIndexChanged">
                                            </asp:DropDownList>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <asp:TextBox ID="TextBox3" runat="server" CssClass="form-control" placeholder="End Time"></asp:TextBox>
                                        </div>
                                        <div class="form-group">
                                            <asp:DropDownList ID="dropDestCity" runat="server" CssClass="form-control" AutoPostBack="True">
                                            </asp:DropDownList>
                                        </div>
                                    </div>
                                    <div class="col-sm-4" runat="server" id="txtDis">
                                        <div class="form-group">
                                            <asp:TextBox ID="txtDistance" runat="server" CssClass="form-control" placeholder="Distance"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <asp:TextBox ID="txtarea" runat="server" CssClass="form-control" placeholder="Area"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-sm-4">
                                        <div class="form-group">
                                            <asp:TextBox ID="txtrate" runat="server" CssClass="form-control" placeholder="Rate/km"></asp:TextBox>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <label>
                                                Facility</label>
                                            <div class="checkbox">
                                                <label>
                                                    <asp:CheckBox ID="chkac" runat="server" Text="A.C." />
                                                </label>
                                                <label>
                                                    <asp:CheckBox ID="chkTv" runat="server" Text="T.V." />
                                                </label>
                                                <label>
                                                    <asp:CheckBox ID="chkmusic" runat="server" Text="Music System" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6">
                                        <div class="form-group">
                                            <asp:FileUpload ID="FileUpload1" runat="server" />
                                            <asp:Image ID="Image2" runat="server" Height="100" Width="100" Visible="false" />
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <asp:LinkButton Text="Cancle" CssClass="btn btn-primary btn-block" runat="server"
                                            ID="lnkCancle" OnClick="lnkCancle_Click" />
                                    </div>
                                    <div class="col-md-6 text-right">
                                        <asp:Button ID="Button2" runat="server" Text="Save" CssClass="btn btn-primary btn-block"
                                            OnClick="Button1_Click" />
                                    </div>
                                </div>
                            </asp:Panel>
                            <asp:Panel ID="Panel2" runat="server" Visible="false">
                                <div class="text-right box">
                                    <asp:LinkButton ID="LinkButton1" runat="server" CssClass="btn  btn-primary btn-sm"
                                        CommandName="AddNew" data-toggle="tooltip" data-placement="right" title="AddNew"
                                        OnClick="LinkButton1_Click">
                                    <i class="fa fa-plus"></i>
                                    </asp:LinkButton>
                                </div>
                                <asp:DataList ID="DataList1" runat="server" Width="100%" OnItemCommand="DataList1_ItemCommand"
                                    OnItemDataBound="DataList1_ItemDataBound">
                                    <ItemTemplate>
                                        <div class="box">
                                            <div class="detail text-right">
                                                <a href='<%# "userVehicle.aspx?vid="+Eval("Id") %>' title="Edit" class="btn  btn-primary btn-sm" data-toggle="tooltip" data-placement="left"><i class="fa fa-edit"></i>
                                                </a>
                                          
                                                <asp:LinkButton ID="LinkButton4" runat="server" CommandArgument='<%# Eval("Id") %>'
                                                    CssClass="btn  btn-primary btn-sm" CommandName="deleteData" data-toggle="tooltip"
                                                    data-placement="right" title="Delete">
                                    <i class="fa fa-trash"></i>
                                                </asp:LinkButton>
                                            </div>
                                            <div class="detail">
                                                <label>
                                                    Vehicle NO :
                                                </label>
                                                <asp:Label ID="Label4" runat="server" Text='<%# Eval("Vehical_No") %>'></asp:Label>
                                            </div>
                                            <div class="detail">
                                                <label>
                                                    Liecence NO :
                                                </label>
                                                <asp:Label ID="Label1" runat="server" Text='<%# Eval("Liecence_No") %>'></asp:Label>
                                            </div>
                                            <asp:Label ID="Label8" runat="server" Text='<%# Eval("Vehical_Type") %>' Visible="false"></asp:Label>
                                            <asp:Panel ID="Panel3" runat="server">
                                                <div class="detail">
                                                    <label>
                                                        Route :
                                                    </label>
                                                    <asp:Label ID="Label2" runat="server" Text='<%# Eval("sourceCity") %>'></asp:Label>
                                                    &nbsp;to
                                                    <asp:Label ID="Label7" runat="server" Text='<%# Eval("destCity") %>'></asp:Label>
                                                </div>
                                                <div class="detail clearfix">
                                                    <div class="pull-left">
                                                        <label>
                                                            Start Time :
                                                        </label>
                                                        <asp:Label ID="Label3" runat="server" Text='<%# Eval("start_time") %>'></asp:Label>
                                                    </div>
                                                    <div class="pull-right">
                                                        <label>
                                                            End Time :
                                                        </label>
                                                        <asp:Label ID="Label6" runat="server" Text='<%# Eval("end_time") %>'></asp:Label>
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
                                                    <asp:Image ID="Image1" runat="server" ImageUrl='<%# Eval("vehical_img") %>' Height="150"
                                                        Width="150" />
                                                </div>
                                            </asp:Panel>
                                        </div>
                                    </ItemTemplate>
                                </asp:DataList>
                            </asp:Panel>
                        </div>
                        <div class="clearfix">
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
