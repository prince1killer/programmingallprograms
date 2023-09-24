using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class _Default : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
    }

    protected void TextBox1_TextChanged(object sender, EventArgs e)
    {
        TextBox3.Text = Convert.ToString(Convert.ToInt32(TextBox2.Text) + Convert.ToInt32(TextBox1.Text));

    }

    protected void Button2_Click(object sender, EventArgs e)
    {
        TextBox3.Text = Convert.ToString(Convert.ToDouble(TextBox1.Text)/Convert.ToDouble(TextBox2.Text));
    }

    protected void Button3_Click(object sender, EventArgs e)
    {
        TextBox3.Text = Convert.ToString(Convert.ToDecimal(TextBox1.Text)/ Convert.ToDecimal(TextBox2.Text));
    }

    protected void Button4_Click(object sender, EventArgs e)
    {
        TextBox3.Text = Convert.ToString(Convert.ToInt32(TextBox1.Text)*Convert.ToInt32(TextBox2.Text));
    }
}