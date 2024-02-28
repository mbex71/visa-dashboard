<template>
  <div class="min-h-screen flex flex-row bg-slate-900 pt-4">
    <div class="p-4 text-white w-1/6">
      <h1 class="text-3xl">Visa Indonesia</h1>
      <ul class="space-y-4 mt-12">
        <SidebarLink to="/dashboard" title="Dashboard" />
        <SidebarLink to="/service" title="Service" />
        <SidebarLink to="/order" title="Order" />
        <SidebarLink to="/customer" title="Customer" />
        <SidebarLink to="/customer-identity" title="Customer Identity" />
        <SidebarLink to="/promo-code" title="Promo Code" />
        <SidebarLink to="/admin" title="Admin User" />
        
      </ul>
    </div>
    <div class="bg-white flex-1 p-4 rounded-ss-3xl">
            <slot/>
        </div>
  </div>
</template>
