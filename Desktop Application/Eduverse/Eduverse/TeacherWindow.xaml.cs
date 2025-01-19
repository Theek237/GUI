using System.Windows;
using System.Windows.Controls;
using System.Linq;
using BCrypt.Net; // Make sure to add BCrypt.Net-Next NuGet package

namespace Eduverse
{
    public partial class TeacherWindow : Window
    {
        private const string DEFAULT_PASSWORD = "123456";

        public TeacherWindow()
        {
            InitializeComponent();
            Read();
        }

        public void Create()
        {
            using (DataContext context = new DataContext())
            {
                var name = TeacherNameTextBox.Text;
                var email = TeacherEmailTextBox.Text;
                var mobile = TeacherMobileTextBox.Text;

                if (name != null && email != null && mobile != null)
                {
                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            var teacher = new Teacher()
                            {
                                Name = name,
                                Email = email,
                                Mobile = mobile
                            };
                            context.Teachers.Add(teacher);
                            context.SaveChanges();

                            var teacherAuth = new TeacherAuth()
                            {
                                Id = teacher.Id,
                                Email = email,
                                HPassword = BCrypt.Net.BCrypt.HashPassword(DEFAULT_PASSWORD)
                            };
                            context.TeacherAuths.Add(teacherAuth);
                            context.SaveChanges();

                            transaction.Commit();
                            MessageBox.Show("Teacher added successfully!");
                            ClearForm();
                            Read();
                        }
                        catch (System.Exception ex)
                        {
                            transaction.Rollback();
                            MessageBox.Show($"Error creating teacher: {ex.Message}");
                        }
                    }
                }
            }
        }

        public void Read()
        {
            using (DataContext context = new DataContext())
            {
                TeacherDataGrid.ItemsSource = context.Teachers.ToList();
            }
        }

        public void Update()
        {
            using (DataContext context = new DataContext())
            {
                Teacher selectedTeacher = TeacherDataGrid.SelectedItem as Teacher;
                var name = TeacherNameTextBox.Text;
                var email = TeacherEmailTextBox.Text;
                var mobile = TeacherMobileTextBox.Text;

                if (selectedTeacher != null && name != null && email != null && mobile != null)
                {
                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            Teacher teacher = context.Teachers.Find(selectedTeacher.Id);
                            teacher.Name = name;
                            teacher.Email = email;
                            teacher.Mobile = mobile;

                            TeacherAuth teacherAuth = context.TeacherAuths.Single(x => x.Id == selectedTeacher.Id);
                            teacherAuth.Email = email;

                            context.SaveChanges();
                            transaction.Commit();
                            MessageBox.Show("Teacher updated successfully!");
                            ClearForm();
                            Read();
                        }
                        catch (System.Exception ex)
                        {
                            transaction.Rollback();
                            MessageBox.Show($"Error updating teacher: {ex.Message}");
                        }
                    }
                }
            }
        }

        public void Delete()
        {
            using (DataContext context = new DataContext())
            {
                Teacher selectedTeacher = TeacherDataGrid.SelectedItem as Teacher;
                if (selectedTeacher != null)
                {
                    using (var transaction = context.Database.BeginTransaction())
                    {
                        try
                        {
                            var teacher = context.Teachers.Find(selectedTeacher.Id);
                            var teacherAuth = context.TeacherAuths.FirstOrDefault(x => x.Id == selectedTeacher.Id);

                            if (teacher != null)
                            {
                                if (teacherAuth != null)
                                {
                                    context.TeacherAuths.Remove(teacherAuth);
                                    context.SaveChanges();
                                }

                                context.Teachers.Remove(teacher);
                                context.SaveChanges();

                                transaction.Commit();
                                MessageBox.Show("Teacher deleted successfully!");
                                ClearForm();
                                Read();
                            }
                            else
                            {
                                MessageBox.Show("Teacher not found!");
                            }
                        }
                        catch (System.Exception ex)
                        {
                            transaction.Rollback();
                            MessageBox.Show($"Error deleting teacher: {ex.Message}\nInner Exception: {ex.InnerException?.Message}");
                        }
                    }
                }
            }
        }

        private void ClearForm()
        {
            TeacherIdTextBox.Clear();
            TeacherNameTextBox.Clear();
            TeacherEmailTextBox.Clear();
            TeacherMobileTextBox.Clear();
        }

        private void TeacherCreate_Click(object sender, RoutedEventArgs e)
        {
            Create();
        }

        private void TeacherUpdate_Click(object sender, RoutedEventArgs e)
        {
            Update();
        }

        private void TeacherDelete_Click(object sender, RoutedEventArgs e)
        {
            Delete();
        }

        private void TeacherSelectionChanged(object sender, SelectionChangedEventArgs e)
        {
            Teacher selectedTeacher = TeacherDataGrid.SelectedItem as Teacher;
            if (selectedTeacher != null)
            {
                TeacherIdTextBox.Text = selectedTeacher.Id.ToString();
                TeacherNameTextBox.Text = selectedTeacher.Name;
                TeacherEmailTextBox.Text = selectedTeacher.Email;
                TeacherMobileTextBox.Text = selectedTeacher.Mobile;
            }
        }
    }
}