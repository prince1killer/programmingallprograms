using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data.SqlClient;
using System.Data;
public partial class Form : System.Web.UI.Page
{

    SqlConnection con;
    SqlCommand cmd;
    SqlDataAdapter da;
    DataSet ds;


    void myConnection() {
        con = new SqlConnection("Data Source = (LocalDB)\\MSSQLLocalDB; AttachDbFilename =|datadirectory|Database.mdf; Integrated Security = True");
        con.Open();
    }
    protected void Page_Load(object sender, EventArgs e)
    {

    }

  

    protected void Button1_Click(object sender, EventArgs e)
    {
        myConnection();
        cmd = new SqlCommand("insert into Formtable values(@na, @us,@em,@ps,@ge)", con);
        cmd.Parameters.AddWithValue("@na",TextBox1.Text);
        cmd.Parameters.AddWithValue("@us",TextBox2.Text);
        cmd.Parameters.AddWithValue("@em",TextBox3.Text);
        cmd.Parameters.AddWithValue("@ps",TextBox4.Text);
        if (RadioButton1.Checked == true) {
            cmd.Parameters.AddWithValue("@ge", RadioButton1.Text);
        }
        else if (RadioButton2.Checked == true) {
            cmd.Parameters.AddWithValue("@ge",RadioButton2.Text);
        }
        cmd.ExecuteNonQuery();
        con.Close();
        int a = 0;
        a++;
        Response.Write("successfilly added persion"+a);
    }

    protected void TextBox3_TextChanged(object sender, EventArgs e)
    {

    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        myConnection();
        cmd = new SqlCommand("select * from formtable ",con);
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        GridView1.DataSource=ds;
        GridView1.DataBind();



    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        myConnection();
        cmd = new SqlCommand("select * from formtable where name like @nm ", con);
        cmd.Parameters.AddWithValue("@nm", "%"+TextBox5.Text+"%");
        da = new SqlDataAdapter(cmd);
        ds = new DataSet();
        da.Fill(ds);

        GridView1.DataSource = ds;
        GridView1.DataBind();

    }
}