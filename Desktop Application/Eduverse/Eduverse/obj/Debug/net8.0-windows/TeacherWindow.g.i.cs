﻿#pragma checksum "..\..\..\TeacherWindow.xaml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "392C287BCEF87768FC5ADCBB37F335530B6B092B"
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using Eduverse;
using System;
using System.Diagnostics;
using System.Windows;
using System.Windows.Automation;
using System.Windows.Controls;
using System.Windows.Controls.Primitives;
using System.Windows.Controls.Ribbon;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Ink;
using System.Windows.Input;
using System.Windows.Markup;
using System.Windows.Media;
using System.Windows.Media.Animation;
using System.Windows.Media.Effects;
using System.Windows.Media.Imaging;
using System.Windows.Media.Media3D;
using System.Windows.Media.TextFormatting;
using System.Windows.Navigation;
using System.Windows.Shapes;
using System.Windows.Shell;


namespace Eduverse {
    
    
    /// <summary>
    /// TeacherWindow
    /// </summary>
    public partial class TeacherWindow : System.Windows.Window, System.Windows.Markup.IComponentConnector {
        
        
        #line 106 "..\..\..\TeacherWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox TeacherIdTextBox;
        
        #line default
        #line hidden
        
        
        #line 109 "..\..\..\TeacherWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox TeacherNameTextBox;
        
        #line default
        #line hidden
        
        
        #line 114 "..\..\..\TeacherWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox TeacherEmailTextBox;
        
        #line default
        #line hidden
        
        
        #line 117 "..\..\..\TeacherWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.TextBox TeacherMobileTextBox;
        
        #line default
        #line hidden
        
        
        #line 150 "..\..\..\TeacherWindow.xaml"
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1823:AvoidUnusedPrivateFields")]
        internal System.Windows.Controls.DataGrid TeacherDataGrid;
        
        #line default
        #line hidden
        
        private bool _contentLoaded;
        
        /// <summary>
        /// InitializeComponent
        /// </summary>
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "8.0.10.0")]
        public void InitializeComponent() {
            if (_contentLoaded) {
                return;
            }
            _contentLoaded = true;
            System.Uri resourceLocater = new System.Uri("/Eduverse;V1.0.0.0;component/teacherwindow.xaml", System.UriKind.Relative);
            
            #line 1 "..\..\..\TeacherWindow.xaml"
            System.Windows.Application.LoadComponent(this, resourceLocater);
            
            #line default
            #line hidden
        }
        
        [System.Diagnostics.DebuggerNonUserCodeAttribute()]
        [System.CodeDom.Compiler.GeneratedCodeAttribute("PresentationBuildTasks", "8.0.10.0")]
        [System.ComponentModel.EditorBrowsableAttribute(System.ComponentModel.EditorBrowsableState.Never)]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Design", "CA1033:InterfaceMethodsShouldBeCallableByChildTypes")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Maintainability", "CA1502:AvoidExcessiveComplexity")]
        [System.Diagnostics.CodeAnalysis.SuppressMessageAttribute("Microsoft.Performance", "CA1800:DoNotCastUnnecessarily")]
        void System.Windows.Markup.IComponentConnector.Connect(int connectionId, object target) {
            switch (connectionId)
            {
            case 1:
            this.TeacherIdTextBox = ((System.Windows.Controls.TextBox)(target));
            return;
            case 2:
            this.TeacherNameTextBox = ((System.Windows.Controls.TextBox)(target));
            return;
            case 3:
            this.TeacherEmailTextBox = ((System.Windows.Controls.TextBox)(target));
            return;
            case 4:
            this.TeacherMobileTextBox = ((System.Windows.Controls.TextBox)(target));
            return;
            case 5:
            
            #line 124 "..\..\..\TeacherWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.TeacherCreate_Click);
            
            #line default
            #line hidden
            return;
            case 6:
            
            #line 125 "..\..\..\TeacherWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.TeacherUpdate_Click);
            
            #line default
            #line hidden
            return;
            case 7:
            
            #line 126 "..\..\..\TeacherWindow.xaml"
            ((System.Windows.Controls.Button)(target)).Click += new System.Windows.RoutedEventHandler(this.TeacherDelete_Click);
            
            #line default
            #line hidden
            return;
            case 8:
            this.TeacherDataGrid = ((System.Windows.Controls.DataGrid)(target));
            
            #line 153 "..\..\..\TeacherWindow.xaml"
            this.TeacherDataGrid.SelectionChanged += new System.Windows.Controls.SelectionChangedEventHandler(this.TeacherSelectionChanged);
            
            #line default
            #line hidden
            return;
            }
            this._contentLoaded = true;
        }
    }
}

