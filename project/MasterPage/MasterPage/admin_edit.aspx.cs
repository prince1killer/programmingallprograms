using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Web.UI.HtmlControls;
using System.Xml.Linq;
using System.Data;
using System.Data.SqlClient;

public partial class admin_edit : System.Web.UI.Page
{

    SqlCommand cmd;
    SqlConnection cn;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        //cn = new SqlConnection(@"Data Source=(LocalDB)\v11.0;AttachDbFilename=D:\New E drive\MasterPage\App_Data\ecommerce.mdf;Integrated Security=True");

        cn.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {

        if (IsPostBack == false)
        {

            //Update Query
            if (Request.QueryString["edit"] != null)
            {
                mycon();

                cmd = new SqlCommand("select * from ordertable where id=@id", cn);
                cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);

                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);

                if (ds.Tables[0].Rows.Count > 0)
                {
                    productid.Text = ds.Tables[0].Rows[0]["productid"].ToString();
                    invoice.Text = ds.Tables[0].Rows[0]["invoice"].ToString();
                    clientid.Text = ds.Tables[0].Rows[0]["clientid"].ToString();
                    status.Text = ds.Tables[0].Rows[0]["paymentstatus"].ToString();

                }
                cmd.ExecuteNonQuery();

            }
        }
    }
    protected void savebtn_Click(object sender, EventArgs e)
    {
        mycon();



        if (Request.QueryString["edit"] != null)
        {

            cmd = new SqlCommand("update ordertable set paymentstatus=@status where id=@id", cn);
            cmd.Parameters.AddWithValue("@status", status.Text);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["edit"]);

            cmd.ExecuteNonQuery();

            Response.Write("Update SuccessFull");
            
        }

        if (status.Text=="done")
        {

            cmd = new SqlCommand("select * from regclient where id=@id", cn);
            cmd.Parameters.AddWithValue("@id", Request.QueryString["cid"]);
            da = new SqlDataAdapter(cmd);
            ds = new DataSet();
            da.Fill(ds);



            string to = ds.Tables[0].Rows[0]["email"].ToString();
            string msg = "Your Order is Confirm";
            if (GmailSender.SendMail("rajanupadhyaydeveloper@gmail.com","hxvdzpnsgcbzuovr", to,"Payment Done",msg))
            {
                Response.Write("<script>alert('Your Otp Has Been Sent to your Email Account Please Check Your Email !')</script>");
          
             }
            else
            {
             Response.Write("<script>alert('Sorry, Message Sending Failed... Please Contact Your Network Operator')</script>");
            }
        }


    }
    protected void cancel_Click(object sender, EventArgs e)
    {
        Response.Redirect("admin_edit.aspx");        
    }
}