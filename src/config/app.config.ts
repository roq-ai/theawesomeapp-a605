interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin', 'Team Member', 'Guest'],
  tenantName: 'Organization',
  applicationName: 'TheAwesomeApp',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View tasks'],
  ownerAbilities: ['Manage tasks', 'Manage users', 'Add comments to tasks', 'Set task priority'],
};
