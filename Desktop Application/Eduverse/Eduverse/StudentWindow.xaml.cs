using System.Windows;
using System.Windows.Controls;
using System.Linq;
using BCrypt.Net; // Make sure to add BCrypt.Net-Next NuGet package

namespace Eduverse
{
    public partial class StudentWindow : Window
    {
        private const string DEFAULT_PASSWORD = "123456";

        public StudentWindow()
        {
            InitializeComponent();
            Read();
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
                    // Begin transaction to ensure both operations succeed or fail together
                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            // Create student
                            var student = new Student()
                            {
                                Name = name,
                                Email = email,
                                Mobile = mobile
                            };
                            context.Students.Add(student);
                            context.SaveChanges();

                            // Create student auth with default password
                            var studentAuth = new StudentAuth()
                            {
                                Id = student.Id,
                                Email = email,
                                HPassword = BCrypt.Net.BCrypt.HashPassword(DEFAULT_PASSWORD)
                            };
                            context.StudentAuths.Add(studentAuth);
                            context.SaveChanges();

                            transaction.Commit();
                            MessageBox.Show("Student added successfully!");
                            ClearForm();
                            Read();
                        }
                        catch (System.Exception ex)
                        {
                            transaction.Rollback();
                            MessageBox.Show($"Error creating student: {ex.Message}");
                        }
                    }
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
                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            // Update student
                            Student student = context.Students.Find(selectedStudent.Id);
                            student.Name = name;
                            student.Email = email;
                            student.Mobile = mobile;

                            // Update student auth email
                            StudentAuth studentAuth = context.StudentAuths.Single(x => x.Id == selectedStudent.Id);
                            studentAuth.Email = email;

                            context.SaveChanges();
                            transaction.Commit();
                            MessageBox.Show("Student updated successfully!");
                            ClearForm();
                            Read();
                        }
                        catch (System.Exception ex)
                        {
                            transaction.Rollback();
                            MessageBox.Show($"Error updating student: {ex.Message}");
                        }
                    }
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
                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            // Find both records first
                            var student = context.Students.Find(selectedStudent.Id);
                            var studentAuth = context.StudentAuths.FirstOrDefault(x => x.Id == selectedStudent.Id);

                            if (student != null)
                            {
                                // Delete auth record first if it exists
                                if (studentAuth != null)
                                {
                                    context.StudentAuths.Remove(studentAuth);
                                    context.SaveChanges();
                                }

                                // Then delete student record
                                context.Students.Remove(student);
                                context.SaveChanges();

                                transaction.Commit();
                                MessageBox.Show("Student deleted successfully!");
                                ClearForm();
                                Read();
                            }
                            else
                            {
                                MessageBox.Show("Student not found!");
                            }
                        }
                        catch (System.Exception ex)
                        {
                            transaction.Rollback();
                            MessageBox.Show($"Error deleting student: {ex.Message}\nInner Exception: {ex.InnerException?.Message}");
                        }
                    }
                }
            }
        }

        // Existing methods remain unchanged
        private void ClearForm()
        {
            StudentIdTextBox.Clear();
            StudentNameTextBox.Clear();
            StudentEmailTextBox.Clear();
            StudentMobileTextBox.Clear();
        }

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