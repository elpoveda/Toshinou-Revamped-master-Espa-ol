class GGSettingsWindow {
  createWindow() {
    this.GGSettingsWindow = WindowFactory.createWindow({
      width: 320,
      text: "Ayuda de GG"
    });

    let controls = [{
        name: 'alpha',
        labelText: 'Saltar a GG Alpha',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.alpha = this.checked;
        }
      },
      {
        name: 'beta',
        labelText: 'Saltar a GG Beta',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.beta = this.checked;
        }
      },
      {
        name: 'gamma',
        labelText: 'Saltar a GG Gamma',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.gamma = this.checked;
        }
      },
      {
        name: 'delta',
        labelText: 'Saltar a GG Delta',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.delta = this.checked;
        }
      },
      {
        name: 'epsilon',
        labelText: 'Saltar a GG Epsilon',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.epsilon = this.checked;
        }
      },
      {
        name: 'zeta',
        labelText: 'Saltar a GG Zeta',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.zeta = this.checked;
        }
      },
      {
        name: 'kappa',
        labelText: 'Saltar a GG Kappa',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kappa = this.checked;
        }
      },
      {
        name: 'lambda',
        labelText: 'Saltar a GG Lambda',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.lambda = this.checked;
        }
      },
      {
        name: 'kronos',
        labelText: 'Saltar a GG Kronos',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kronos = this.checked;
        }
      },
      {
        name: 'hades',
        labelText: 'Saltar a GG Hades',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.hades = this.checked;
        }
      },
      {
        name: 'kuiper',
        labelText: 'Saltar a GG Kuiper',
        appendTo: this.GGSettingsWindow,
        event: function () {
          window.settings.kuiper = this.checked;
        }
      }
    ]

    controls.forEach((control) => {
      this[control.name] = ControlFactory.createControl(control);
    });
  }
}