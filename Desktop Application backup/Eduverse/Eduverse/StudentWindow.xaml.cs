using System.Windows;
using System.Windows.Controls;
using System.Linq;

namespace Eduverse
{
    public partial class StudentWindow : Window
    {
        public StudentWindow()
        {
            InitializeComponent();
            Read(); // Load data when window opens
        }

        public void Create()
        {
            using (DataContext context = new DataContext())
            {
                var name = StudentNameTextBox.Text;
                var email = StudentEmailTextBox.Text;
                var mobile = StudentMobileTextBox.Text;

                if (name != null && email != null && mobile != null)
                {
                    context.Students.Add(new Student() { Name = name, Email = email, Mobile = mobile });
                    context.SaveChanges();
                    MessageBox.Show("Student added successfully!");
                    ClearForm();
                    Read(); // Refresh the grid
                }
            }
        }

        public void Read()
        {
            using (DataContext context = new DataContext())
            {
                StudentDataGrid.ItemsSource = context.Students.ToList();
            }
        }

        public void Update()
        {
            using (DataContext context = new DataContext())
            {
                Student selectedStudent = StudentDataGrid.SelectedItem as Student;
                var name = StudentNameTextBox.Text;
                var email = StudentEmailTextBox.Text;
                var mobile = StudentMobileTextBox.Text;

                if (selectedStudent != null && name != null && email != null && mobile != null)
                {
                    Student student = context.Students.Find(selectedStudent.Id);
                    student.Name = name;
                    student.Email = email;
                    student.Mobile = mobile;
                    context.SaveChanges();
                    MessageBox.Show("Student updated successfully!");
                    ClearForm();
                    Read(); // Refresh the grid
                }
            }
        }

        public void Delete()
        {
            using (DataContext context = new DataContext())
            {
                Student selectedStudent = StudentDataGrid.SelectedItem as Student;
                if (selectedStudent != null)
                {
                    Student student = context.Students.Single(x => x.Id == selectedStudent.Id);
                    context.Remove(student);
                    context.SaveChanges();
                    MessageBox.Show("Student deleted successfully!");
                    ClearForm();
                    Read(); // Refresh the grid
                }
            }
        }

        private void ClearForm()
        {
            StudentIdTextBox.Clear();
            StudentNameTextBox.Clear();
            StudentEmailTextBox.Clear();
            StudentMobileTextBox.Clear();
        }

        // Event Handlers
        private void StdCreate_Click(object sender, RoutedEventArgs e)
        {
            Create();
        }

        private void StdUpdate_Click(object sender, RoutedEventArgs e)
        {
            Update();
        }

        private void StdDelete_Click(object sender, RoutedEventArgs e)
        {
            Delete();
        }

        private void StudentSelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            Student selectedStudent = StudentDataGrid.SelectedItem as Student;
            if (selectedStudent != null)
            {
                StudentIdTextBox.Text = selectedStudent.Id.ToString();
                StudentNameTextBox.Text = selectedStudent.Name;
                StudentEmailTextBox.Text = selectedStudent.Email;
                StudentMobileTextBox.Text = selectedStudent.Mobile;
            }
        }
    }
}