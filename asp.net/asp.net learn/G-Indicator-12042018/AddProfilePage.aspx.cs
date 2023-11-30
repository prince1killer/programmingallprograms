using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.SqlClient;

public partial class AddProfilePage : System.Web.UI.Page
{
    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;

    void mycon()
    {
        con = new SqlConnection(ConfigurationManager.ConnectionStrings["connectionString"].ToString());        
        con.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {
        if (IsPostBack == false)
        {


            if (Session["user"] != null)
            {


                mycon();
                cmd = new SqlCommand("Select * from User_mstr where Username=@un", con);
                cmd.Parameters.AddWithValue("@un", Session["user"].ToString());
                da = new SqlDataAdapter(cmd);
                ds = new DataSet();
                da.Fill(ds);
                if (ds.Tables[0].Rows.Count > 0)
                {
                    TextBox1.Text = ds.Tables[0].Rows[0]["name"].ToString();
                    TextBox3.Text = ds.Tables[0].Rows[0]["Username"].ToString();
                    DropDownList1.Text = ds.Tables[0].Rows[0]["sec_que"].ToString();
                    TextBox7.Text = ds.Tables[0].Rows[0]["Contact"].ToString();
                    TextBox8.Text = ds.Tables[0].Rows[0]["email"].ToString();
                    TextBox2.Text = ds.Tables[0].Rows[0]["city"].ToString();
                    TextBox6.Text = ds.Tables[0].Rows[0]["address"].ToString();
                    TextBox9.Text = ds.Tables[0].Rows[0]["sec_ans"].ToString();

                }
            }

            else
            {
                Response.Redirect("logind.aspx");
            }
        }
    }
    protected void Button1_Click(object sender, EventArgs e)
    {
        mycon();
        cmd = new SqlCommand("update User_mstr set name=@nm,contact=@cn,email=@em,city=@ct,address=@ad,sec_que=@sq,sec_ans=@sa where username=@un", con);
        cmd.Parameters.AddWithValue("@nm", TextBox1.Text);
        cmd.Parameters.AddWithValue("@un", Session["user"].ToString());
        cmd.Parameters.AddWithValue("@cn", TextBox7.Text);
        cmd.Parameters.AddWithValue("@em", TextBox8.Text);
        cmd.Parameters.AddWithValue("@ct", TextBox2.Text);
        cmd.Parameters.AddWithValue("@ad", TextBox6.Text);
        cmd.Parameters.AddWithValue("@sq", DropDownList1.Text);
        cmd.Parameters.AddWithValue("@sa", TextBox9.Text);
        cmd.ExecuteNonQuery();
        Response.Write("<script>alert('Succesfully Update Your Data.')</script>");
    }
}