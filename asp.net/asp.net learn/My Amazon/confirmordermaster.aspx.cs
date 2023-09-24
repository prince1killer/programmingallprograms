using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class confirmordermaster : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        if (Request.Cookies["user"]==null)
        {

            Response.Redirect("Default.aspx");
        }
        if (!IsPostBack)
        {

            if (Request.QueryString["orderid"] != null)
            {
                ThirdBal tbal = new ThirdBal();
                tbal.thirdcatid = Convert.ToInt32(Request.QueryString["orderid"]);
                DAL tdal = new DAL();
                DataSet ds = tdal.getthirdcatdatafromquerystring(tbal);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    DataList1.DataSource = ds;
                    DataList1.DataBind();
                    ViewState["price"] = ds.Tables[0].Rows[0]["thirdcatprice"];
                    ViewState["proname"] = ds.Tables[0].Rows[0]["thirdcatname"];
                }

            }

        }



    }

    protected void Button1_Click(object sender, EventArgs e)
    {
            orderBal obal = new orderBal();
            obal.userid= Convert.ToInt32( Request.Cookies["user"].Values["userid"]);
            obal.thirdcatid =Convert.ToInt32( Request.QueryString["orderid"]);
            obal.orderaddress = TextBox1.Text+TextBox2.Text+TextBox3.Text;
            obal.orderdate= Convert.ToDateTime(System.DateTime.Now);

            DAL rdal = new DAL();
            int res=rdal.orderinsert(obal);
            if (res==1)
            {
            string proname = ViewState["proname"].ToString();
            string price = ViewState["price"].ToString();
                Response.Write("<script>alert('Order Success');</script>");
            Response.Redirect("https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=xpanel@paypal.com&item_name="+proname+"&amount="+price+"&quantity=1&currency_code=INR");


}
            else
            {
                Response.Write("<script>alert('Something is wrong....');</script>");

            }

       




    }
}